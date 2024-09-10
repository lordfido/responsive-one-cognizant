const path = require('path');
const { getCopyPlugin, appsPath } = require('./webpack.utils');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    popup: path.resolve(appsPath, 'popup/index.ts'),
    oneCognizant: path.resolve(appsPath, 'oneCognizant/index.ts'),
    goPerform: path.resolve(appsPath, 'goPerform/index.ts'),
    myLearningStudio: path.resolve(appsPath, 'myLearningStudio/index.ts'),
    associate360: path.resolve(appsPath, 'associate360/index.ts')
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
  }
};
