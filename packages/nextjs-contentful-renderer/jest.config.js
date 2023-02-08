const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  testEnvironment: undefined,
  coverageThreshold: {
    global: {
      ...config.coverageThreshold.global,
      branches: 53,
      functions: 47,
      lines: 56,
      statements: 62,
    },
  },
};
