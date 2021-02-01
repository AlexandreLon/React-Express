const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './front/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
          },
          'css-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = config;