const path = require('path');
const devConfig = require('./webpack.config.dev');

module.exports = {
  ...devConfig,
  mode: 'production',
  devtool: undefined,
  output: {
    ...devConfig.output,
    path: path.resolve(__dirname, 'build/js/')
  }
}
