module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Ignore the auto generated code for code coverage
  coveragePathIgnorePatterns: ["/interfaces/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
