const path = require('path');
const { getCopyPlugin, appsPath } = require('./webpack.utils');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    popup: path.resolve(appsPath, 'popup/index.ts'),
    oneCognizant: path.resolve(appsPath, 'oneCognizant/index.ts'),
    associate360: path.resolve(appsPath, 'associate360/index.ts'),
    ePay: path.resolve(appsPath, 'ePay/index.ts'),
    goPerform: path.resolve(appsPath, 'goPerform/index.ts'),
    liveSupport: path.resolve(appsPath, 'liveSupport/index.ts'),
    myLearningStudio: path.resolve(appsPath, 'myLearningStudio/index.ts'),
    timesheet: path.resolve(appsPath, 'timesheet/index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(distPath, 'js'),
    assetModuleFilename: '../images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/i,
        use: [
          // Generates a file
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../css/'
            }
          },
          // Compiles Sass to CSS
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [getCopyPlugin(distPath)],
  resolve: {
    extensions: ['.tsx', '.ts', '.scss']
  },
  stats: {
    loggingDebug: ['sass-loader']
  }
};
