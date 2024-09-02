const path = require('path');
const { getCopyPlugin, pagesPath } = require('./webpack.utils');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    popup: path.resolve(pagesPath, 'popup/index.ts'),
    oneCognizant: path.resolve(pagesPath, 'oneCognizant/index.ts'),
    goPerform: path.resolve(pagesPath, 'goPerform/index.ts'),
    myLearningStudio: path.resolve(pagesPath, 'myLearningStudio/index.ts'),
    associate360: path.resolve(pagesPath, 'associate360/index.ts')
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
