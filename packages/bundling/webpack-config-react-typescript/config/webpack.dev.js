const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin');

const ROOT_DIR = fs.realpathSync(process.cwd());
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    hot: true,
    compress: true,
    client: {
      logging: 'error',
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  stats: 'none',
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.ProgressPlugin({
      percentBy: 'entries'
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  optimization: {
    chunkIds: 'named',
    emitOnErrors: false,
    moduleIds: 'named',
    runtimeChunk: true
  },
  output: {
    path: PUBLIC_DIR,
    filename: path.join('js', '[name].js'),
    chunkFilename: path.join('js', '[name].js')
  }
};
