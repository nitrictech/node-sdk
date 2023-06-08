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
import * as faas from '../faas/index';
import { schedule, RateWorkerOptions, Frequency } from '.';
jest.mock('../faas/index');

describe('Schedule', () => {
  const startSpy = jest
    .spyOn(faas.Faas.prototype, 'start')
    .mockReturnValue(Promise.resolve());
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

    it('should not return an error', () => {
      expect(error).toBe(undefined);
    });
  });

  describe('when creating a new schedule with an invalid rate', () => {
    let error = undefined;
    afterAll(() => {
      jest.resetAllMocks();
    });

    beforeAll(async () => {
      try {
        await schedule('main').every('fleventy days', mockFn);
      } catch (err) {
        error = err;
      }
    });

    it('should return an error', () => {
      expect(error).not.toBe(undefined);
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
    describe(`when create a new schedule with rate ${rate}`, () => {
      afterAll(() => {
        jest.resetAllMocks();
      });

      beforeAll(async () => {
        await schedule('main').every(rate, mockFn);
      });

      it('should create a new FaasClient', () => {
        expect(faas.Faas).toBeCalledTimes(1);
      });

      it('should provide Faas with ApiWorkerOptions', () => {
        const expectedOpts = new RateWorkerOptions(
          'main',
          1,
          `${rate}s` as Frequency
        );
        expect(faas.Faas).toBeCalledWith(expectedOpts);
      });

      it('should call FaasClient::start()', () => {
        expect(startSpy).toBeCalledTimes(1);
      });
    });
  });

  ['days', 'hours', 'minutes'].forEach((rate: Frequency) => {
    describe(`when create a new schedule with rate ${rate}`, () => {
      afterAll(() => {
        jest.resetAllMocks();
      });

      beforeAll(async () => {
        await schedule('main').every(`7 ${rate}`, mockFn);
      });

      it('should create a new FaasClient', () => {
        expect(faas.Faas).toBeCalledTimes(1);
      });

      it('should provide Faas with ApiWorkerOptions', () => {
        const expectedOpts = new RateWorkerOptions('main', 7, rate);
        expect(faas.Faas).toBeCalledWith(expectedOpts);
      });

      it('should call FaasClient::start()', () => {
        expect(startSpy).toBeCalledTimes(1);
      });
    });
  });
});
