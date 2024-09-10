const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const appsPath = path.resolve(__dirname, 'src', 'apps');

const getCopyPlugin = (distPath) =>
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(appsPath, 'popup/index.html'),
        to: path.resolve(distPath, 'popup.html')
      }
    ]
  });

module.exports = {
  getCopyPlugin,
  appsPath
};
