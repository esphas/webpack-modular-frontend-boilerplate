
process.env.NODE_ENV = 'development';

const commonConfig = require('./webpack.config.common');

const config = {
  ...commonConfig,
};

module.exports = config;
