
process.env.NODE_ENV = 'production';

const commonConfig = require('./webpack.config.common');

const config = {
  ...commonConfig,
};

module.exports = config;
