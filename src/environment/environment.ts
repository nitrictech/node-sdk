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
const NITRIC_ENVIRONMENT = "NITRIC_ENVIRONMENT";

// Possible nitric execution environments
enum EnvironmentStage {
    // Local development run (using nitric run/start)
    LocalRun = "run",
    // Local development requirements building/collection (using nitric up) 
    Build = "build",
    // When the code is running in a deployed environment
    Cloud = "cloud",
}

const getCurrentEnvironment = (): EnvironmentStage => {
    const lifecycle = process.env[NITRIC_ENVIRONMENT];
    if (!lifecycle || !Object.values(EnvironmentStage).includes(lifecycle as EnvironmentStage)) {
        throw new Error(`Unable to determine the current Nitric lifecycle, please ensure the ${NITRIC_ENVIRONMENT} environment variable is set`);
    }
    return lifecycle as EnvironmentStage;
}

// Check if the current environment is one of the provided stages
const isInEnvironment = (stage: EnvironmentStage[]) => {
    const currentStage = getCurrentEnvironment();
    return stage.includes(currentStage);
}

// If the current environment is one of the provided stages, execute the provided callback
const whenInEnvironments = <T>(stage: EnvironmentStage[], callback: EnvCallback<T>): T | undefined => {
    if (isInEnvironment(stage)) {
        return callback();
    }
}

const whenLocallyRunning = <T>(callback: EnvCallback<T>) => whenInEnvironments([EnvironmentStage.LocalRun], callback);


const whenBuilding = <T>(callback: EnvCallback<T>) => whenInEnvironments([EnvironmentStage.Build], callback);

const whenInCloud = <T>(callback: EnvCallback<T>) => whenInEnvironments([EnvironmentStage.Cloud], callback);

type EnvCallback<T> = () => T;

export const Environment = {
    // Check if the current environment is one of the provided stages
    is: isInEnvironment,
    // Check if the current environment is a local run
    isLocalRun: () => isInEnvironment([EnvironmentStage.LocalRun]),
    // Check if the current environment is a build
    isBuild: () => isInEnvironment([EnvironmentStage.Build]),
    // Check if the current environment is a cloud environment
    isCloud: () => isInEnvironment([EnvironmentStage.Cloud]),
    // If the current environment is one of the provided stages, execute the provided callback
    when: whenInEnvironments,
    // If the current environment is a local run, execute the provided callback
    whenLocalRun,
    // If the current environment is a build, execute the provided callback
    whenBuild,
    // If the current environment is a cloud environment, execute the provided callback
    whenCloud,
}
