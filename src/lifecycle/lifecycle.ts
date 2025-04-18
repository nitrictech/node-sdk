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

// The environment variable key that will be used to determine the current Nitric lifecycle/executing environment
const NITRIC_ENVIRONMENT = 'NITRIC_ENVIRONMENT';

// Possible nitric execution environments
export enum LifecycleStage {
  // Local development run (using nitric run/start)
  LocalRun = 'run',
  // Local development requirements building/collection (using nitric up)
  Build = 'build',
  // When the code is running in a deployed environment
  Cloud = 'cloud',
}

const getCurrentLifecycle = (): LifecycleStage => {
  const lifecycle = process.env[NITRIC_ENVIRONMENT];
  if (
    !lifecycle ||
    !Object.values(LifecycleStage).includes(lifecycle as LifecycleStage)
  ) {
    throw new Error(
      `Unable to determine the current Nitric lifecycle, please ensure the ${NITRIC_ENVIRONMENT} environment variable is set`
    );
  }
  return lifecycle as LifecycleStage;
};

// Check if the current environment is one of the provided stages
const isInLifecycle = (stage: LifecycleStage[]) => {
  const currentStage = getCurrentLifecycle();
  return stage.includes(currentStage);
};

// If the current environment is one of the provided stages, execute the provided callback
const whenInLifecycles = <T>(
  stage: LifecycleStage[],
  callback: Lifecycle<T>
): T | undefined => {
  if (isInLifecycle(stage)) {
    return callback();
  }
};

const whenRunning = <T>(callback: Lifecycle<T>) =>
  whenInLifecycles([LifecycleStage.LocalRun, LifecycleStage.Cloud], callback);

const whenCollecting = <T>(callback: Lifecycle<T>) =>
  whenInLifecycles([LifecycleStage.Build], callback);

const isRunning = () =>
  isInLifecycle([LifecycleStage.LocalRun, LifecycleStage.Cloud]);

const isCollecting = () => isInLifecycle([LifecycleStage.Build]);

type Lifecycle<T> = () => T;

export const Lifecycle = {
  // Check if the current environment is one of the provided stages
  is: isInLifecycle,
  // Check if the current lifecycle is collecting application requirements
  isCollecting,
  // Check if the current lifecycle is running the app
  isRunning,
  // If the current environment is one of the provided stages, execute the provided callback
  when: whenInLifecycles,
  // If the current environment is collecting application requirements
  whenCollecting,
  // If the current environment is a cloud environment, execute the provided callback
  whenRunning,
};
