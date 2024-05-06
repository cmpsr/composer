const config = require('../../config/jest/base.jest.config');

module.exports = {
  ...config,
  displayName: require('./package.json').name,
  coveragePathIgnorePatterns: [
    ...config.coveragePathIgnorePatterns,
    '.mock.ts',
  ],
};
