const { defaults } = require('jest-config')
module.exports = {
  // ...
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  rootDir: 'src',
  modulePaths: ['<rootDir>'],
}
