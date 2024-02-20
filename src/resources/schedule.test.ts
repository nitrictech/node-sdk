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
import { schedule, Frequency, Rate, Cron, Schedule } from '.';

describe('Rate Schedules', () => {
  const startSpy = jest
    .spyOn(Rate.prototype as any, 'start')
    .mockResolvedValue(undefined as never);
  const mockFn = jest.fn();

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('when creating a new schedule with an invalid rate', () => {
    let error = undefined;
    afterAll(() => {
      jest.resetAllMocks();
    });

    // beforeAll(async () => {
    //   try {
    //     await schedule('main').every('fleventy days', mockFn);
    //   } catch (err) {
    //     error = err;
    //   }
    // });

    it('should return an error', async () => {
      await expect(async () => {
        await schedule('main').every('fleventy days', mockFn);
      }).rejects.toThrowError(
        'invalid rate expression, expression must begin with a number'
      );
      // expect(error).not.toBe(undefined);
    });
  });

  describe('when creating a new schedule with an invalid frequency', () => {
    let error = undefined;
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      try {
        await schedule('main').every('70 smidgets', mockFn);
      } catch (e) {
        error = e;
      }
    });

    it('should throw an error', () => {
      expect(error).not.toBe(undefined);
    });
  });

  ['day', 'hour', 'minute'].forEach((rate: Frequency) => {
    describe(`when creating a new schedule with rate ${rate}`, () => {
      afterAll(() => {
        jest.resetAllMocks();
      });

      beforeAll(async () => {
        await schedule('main').every(rate, mockFn);
      });

      it('should call Rate start()', () => {
        expect(startSpy).toBeCalledTimes(1);
      });
    });
  });
});

describe('Cron Schedules', () => {
  const cronSpy = jest
    .spyOn(Cron.prototype as any, 'start')
    .mockResolvedValue(undefined as never);
  const mockFn = jest.fn();

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('when creating a new schedule with cron expression', () => {
    let error = undefined;
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      try {
        await schedule('main').cron('0 10 * * *', mockFn);
      } catch (err) {
        error = err;
      }
    });

    it('should call Cron start()', () => {
      expect(cronSpy).toBeCalledTimes(1);
    });

    it('should not return an error', () => {
      expect(error).toBe(undefined);
    });
  });
});
