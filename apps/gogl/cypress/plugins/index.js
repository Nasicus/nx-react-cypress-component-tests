const { join } = require('path')

const { startDevServer } = require('@cypress/webpack-dev-server')
const { getWebpackConfig } = require('@nrwl/cypress/plugins/preprocessor')
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (on, config) => {
  const webpackConfig = getWebpackConfig(config)

  // not sure if following line is required or not, but no matter if it's added or not, it won't work either way
    nrwlConfig(webpackConfig);

  on('dev-server:start', (options) => startDevServer({ options, webpackConfig }))
}