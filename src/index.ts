// re-export node friendly interface wrappers
export * as v1 from './v1';

// re-export original generated code as grpc interfaces
export * as grpc from './interfaces';

// Nitric typings
export * from "./function";
export * from "./request";
export * from "./response";
export * from "./context";