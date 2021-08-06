module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Ignore the auto generated code for code coverage
  coveragePathIgnorePatterns: ['/interfaces/'],
  moduleNameMapper: {
    '@nitric/sdk': '<rootDir>/src',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
