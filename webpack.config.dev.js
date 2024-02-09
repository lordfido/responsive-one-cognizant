const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    oneCognizant: './src/pages/oneCognizant/index.ts',
    goPerform: './src/pages/goPerform/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          // Generates a file
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../css/',
            }
          },
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.scss']
  }
}
