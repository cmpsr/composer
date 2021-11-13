const path = require('path');

export const assetTransformer = {
  process(filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
