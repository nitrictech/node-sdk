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
import { EventMiddleware, Faas, ScheduleMiddleware } from '../faas';

type Frequency = 'days' | 'hours' | 'minutes';

const FREQUENCIES: Frequency[] = ['days', 'hours', 'minutes'];

export class RateWorkerOptions {
  public readonly description: string;
  public readonly rate: number;
  public readonly frequency: Frequency;

  constructor(description: string, rate: number, freq: Frequency) {
    this.description = description;
    this.rate = rate;
    this.frequency = freq;
  }
}

export class CronWorkerOptions {
  public readonly description: string;
  public readonly cron: string;

  constructor(description: string, cron: string) {
    this.description = description;
    this.cron = cron;
  }
}

/**
 * Provides a rate based schedule
 *
 * Rates provide a simple expressive way to define schedules
 */
class Rate {
  public readonly schedule: Schedule;
  private readonly faas: Faas;

  constructor(
    schedule: Schedule,
    rate: string,
    ...middleware: ScheduleMiddleware[]
  ) {
    const [, frequency] = rate.split(' ');
    const normalizedFrequency = frequency.toLocaleLowerCase() as Frequency;

    // This will automatically parse the int off of a valid rate expression e.g. "10 minutes" === 10
    const rateNum = parseInt(rate);

    if (isNaN(rateNum)) {
      throw new Error(
        'invalid rate expression, expression must begin with a number'
      );
    }

    if (!FREQUENCIES.includes(normalizedFrequency)) {
      throw new Error(
        `invalid rate expression, frequency must be one of ${FREQUENCIES}, received ${frequency}`
      );
    }

    this.schedule = schedule;
    this.faas = new Faas(
      new RateWorkerOptions(
        schedule['description'],
        rateNum,
        normalizedFrequency
      )
    );
    this.faas.event(...middleware);
  }

  private async start(): Promise<void> {
    return this.faas.start();
  }
}

/**
 * Provides a cron based schedule
 */
class Cron {
  public readonly schedule: Schedule;
  private readonly faas: Faas;

  constructor(
    schedule: Schedule,
    cron: string,
    ...middleware: ScheduleMiddleware[]
  ) {
    this.schedule = schedule;
    this.faas = new Faas(new CronWorkerOptions(schedule['description'], cron));
    this.faas.event(...middleware);
  }

  private async start(): Promise<void> {
    return this.faas.start();
  }
}

/**
 * Providers a scheduled worker.
 */
class Schedule {
  private readonly description: string;

  constructor(description: string) {
    this.description = description;
  }

  /**
   * Run this schedule on the provided frequency.
   *
   * @param rate to run the schedule, e.g. '7 days'. All rates accept a number and a frequency. Valid frequencies are 'days', 'hours' or 'minutes'.
   * @param middleware the handler/middleware to run on a schedule
   * @returns A promise that resolves when the schedule worker stops running.
   */
  every = (
    rate: string,
    ...middleware: ScheduleMiddleware[]
  ): Promise<void> => {
    // handle singular frequencies. e.g. schedule('something').every('day')
    if (FREQUENCIES.indexOf(`${rate}s` as Frequency) !== -1) {
      rate = `1 ${rate}s`; // 'day' becomes '1 days'
    }

    const r = new Rate(this, rate, ...middleware);
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
 * @param description of the schedule, e.g. "Nightly"
 * @returns a named schedule.
 */
export const schedule = (description: string): Schedule => {
  return new Schedule(description);
};
