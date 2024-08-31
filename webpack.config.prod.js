const path = require('path');
const devConfig = require('./webpack.config.dev');
const { getCopyPlugin } = require('./webpack.utils');

const buildPath = path.resolve(__dirname, 'build');

module.exports = {
  ...devConfig,
  mode: 'production',
  devtool: undefined,
  output: {
    ...devConfig.output,
    path: path.resolve(buildPath, 'js')
  },
  plugins: [getCopyPlugin(buildPath)]
};
