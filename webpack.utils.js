const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const pagesPath = path.resolve(__dirname, 'src', 'pages');

const getCopyPlugin = (distPath) =>
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(pagesPath, 'popup/index.html'),
        to: path.resolve(distPath, 'popup.html')
      }
    ]
  });

module.exports = {
  getCopyPlugin,
  pagesPath
};
