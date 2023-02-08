const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  testEnvironment: undefined,
  coverageThreshold: {
    global: {
      ...config.coverageThreshold.global,
      branches: 18,
      functions: 30,
      lines: 47,
      statements: 21,
    },
  },
};
