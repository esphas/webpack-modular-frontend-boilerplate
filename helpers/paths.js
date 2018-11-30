/**
 * Defines directory structures
 */
const path = require('path');
const resolve = (relative) => path.resolve.bind(null, __dirname, '..', relative);
module.exports = {
  root: resolve('.'),
  src: resolve('src'),
  dist: resolve('dist'),
  public: resolve('public'),
  config: resolve('config'),
  helpers: resolve('helpers'),
  scripts: resolve('scripts'),
  package: resolve('package.json')(),
};
