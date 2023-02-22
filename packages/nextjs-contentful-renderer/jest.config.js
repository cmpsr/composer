const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  testEnvironment: undefined,
  setupFilesAfterEnv: [
    ...config.setupFilesAfterEnv,
    '<rootDir>/config/jest/setupTests.ts',
  ],
};
