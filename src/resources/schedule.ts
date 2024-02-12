// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { SchedulesClient } from '@nitric/proto/schedules/v1/schedules_grpc_pb';
import { startStreamHandler } from './common';
import { SERVICE_BIND } from '../constants';
import * as grpc from '@grpc/grpc-js';
import {
  ClientMessage,
  RegistrationRequest,
  ScheduleCron,
  ScheduleEvery,
  ServerMessage,
} from '@nitric/proto/schedules/v1/schedules_pb';
import { ScheduleMiddleware, createHandler } from '../handlers/handler';
import { IntervalContext } from '../context/interval';

const Frequencies = ['days', 'hours', 'minutes'] as const;

export type Frequency = (typeof Frequencies)[number];

const handleStart = (schedule: Rate | Cron) =>
  startStreamHandler(async () => {
    const scheduleClient = new SchedulesClient(
      SERVICE_BIND,
      grpc.ChannelCredentials.createInsecure()
    );

    // Begin Bi-Di streaming
    const stream = scheduleClient.schedule();

    stream.on('data', async (message: ServerMessage) => {
      // We have an init response from the membrane
      if (message.hasRegistrationResponse()) {
        // We got an init response from the membrane
        // The client can configure itself with any information provided by the membrane..
      } else if (message.hasIntervalRequest()) {
        // We want to handle a function here...
        const intervalRequest = message.getIntervalRequest();
        const responseMessage = new ClientMessage();

        responseMessage.setId(message.getId());

        try {
          const ctx = IntervalContext.fromRequest(intervalRequest);
          const handler = schedule['handler'];
          const result = (await handler(ctx, async (ctx) => ctx)) || ctx;
          responseMessage.setIntervalResponse(
            IntervalContext.toResponse(result)
          );
        } catch (e) {
          // generic error handling
          console.error(e);
        }
        // Send the response back to the membrane
        stream.write(responseMessage);
      }
    });

    // Let the membrane know we're ready to start
    const initRequest = new RegistrationRequest();
    const initMessage = new ClientMessage();

    if (schedule instanceof Rate) {
      initRequest.setScheduleName(schedule.scheduleName);
      const rate = new ScheduleEvery();
      rate.setRate(schedule.rate);
      initRequest.setEvery(rate);
    } else if (schedule instanceof Cron) {
      initRequest.setScheduleName(schedule.scheduleName);
      const cron = new ScheduleCron();
      cron.setExpression(schedule.cron);
      initRequest.setCron(cron);
    }

    //Original faas workers should return a blank InitRequest for compatibility.
    initMessage.setRegistrationRequest(initRequest);
    stream.write(initMessage);

    return stream;
  });

/**
 * Provides a rate based schedule
 *
 * Rates provide a simple expressive way to define schedules
 */
export class Rate {
  public readonly scheduleName: string;
  public readonly rate: string;
  public readonly frequency: Frequency;
  public readonly handler: ScheduleMiddleware | undefined;

  constructor(
    schedule: Schedule,
    rate: string,
    ...middleware: ScheduleMiddleware[]
  ) {
    const [, frequency] = rate.split(' ');
    const normalizedFrequency = frequency.toLocaleLowerCase() as Frequency;

    // // This will automatically parse the int off of a valid rate expression e.g. "10 minutes" === 10
    const rateNum = parseInt(rate);

    if (isNaN(rateNum)) {
      throw new Error(
        'invalid rate expression, expression must begin with a number'
      );
    }

    if (!Frequencies.includes(normalizedFrequency)) {
      throw new Error(
        `invalid rate expression, frequency must one of [${Frequencies.join(
          ', '
        )}] received ${frequency}`
      );
    }

    this.scheduleName = schedule['name'];
    this.rate = rate;
    this.frequency = normalizedFrequency;

    this.handler = createHandler(...middleware);
  }

  private async start(): Promise<void> {
    if (!this.handler) {
      throw new Error(
        `A handler function must be provided for schedule ${this.scheduleName}.`
      );
    }

    return handleStart(this);
  }
}

/**
 * Provides a cron based schedule
 */
export class Cron {
  public readonly cron: string;
  public readonly scheduleName: string;
  public readonly handler: ScheduleMiddleware | undefined;

  constructor(
    schedule: Schedule,
    cron: string,
    ...middleware: ScheduleMiddleware[]
  ) {
    this.scheduleName = schedule['name'];
    this.cron = cron;

    this.handler = createHandler(...middleware);
  }

  private async start(): Promise<void> {
    if (!this.handler) {
      throw new Error(
        `A handler function must be provided for schedule ${this.scheduleName}.`
      );
    }

    return handleStart(this);
  }
}

/**
 * Providers a scheduled worker.
 */
export class Schedule {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * Run this schedule on the provided frequency.
   *
   * @param rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'day/days', 'hour/hours' or 'minute/minutes'.
   * @param middleware the handler/middleware to run on a schedule
   * @returns A promise that resolves when the schedule worker stops running.
   */
  every = (
    rate: string,
    ...middleware: ScheduleMiddleware[]
  ): Promise<void> => {
    // handle singular frequencies without a value, e.g. schedule('something').every('day')
    if (Frequencies.indexOf(`${rate}s` as Frequency) !== -1) {
      rate = `1 ${rate}s`; // 'day' becomes '1 days'
    }

    // handle singular frequencies with a value, e.g. schedule('something').every('1 day')
    const rateParts = rate.split(' ');
    const value = rateParts[0];
    let unit = rateParts[1];
    if (Frequencies.indexOf(`${unit}s` as Frequency) !== -1) {
      unit = `${unit}s`; // 'day' becomes 'days'
    }

    const r = new Rate(this, `${value} ${unit}`, ...middleware);
    // Start the new rate immediately
    return r['start']();
  };

  cron = (
    expression: string,
    ...middleware: ScheduleMiddleware[]
  ): Promise<void> => {
    const r = new Cron(this, expression, ...middleware);
    // Start the new cron immediately
    return r['start']();
  };
}

/**
 * Provides a new schedule, which can be configured with a rate/cron and a callback to run on the schedule.
 * 
 * The schedule name must be unique within the project.
 *
 * @param name of the schedule, e.g. "Nightly"
 * @returns a named schedule builder.
 */
export const schedule = (name: string): Schedule => {
  return new Schedule(name);
};
