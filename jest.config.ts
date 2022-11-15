import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Ignore the auto generated code for code coverage
  roots: ['<rootDir>'],
  coveragePathIgnorePatterns: ['src/gen/'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths,/*, { prefix: '<rootDir>/' } */),
};
