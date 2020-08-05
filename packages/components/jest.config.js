const rootConfig = require('../../jest.config');

module.exports = {
  ...rootConfig,

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    ...rootConfig.coveragePathIgnorePatterns,
    '/src/components/primitives/Icon/icons/',
  ],
};
