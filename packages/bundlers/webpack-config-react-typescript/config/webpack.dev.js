const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

module.exports = (root) => {
  const PUBLIC_DIR = path.resolve(root, '..', 'public');

  return {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsPlugin(),
      new HardSourcePlugin(),
      new WatchMissingNodeModulesPlugin(path.resolve(root, '..', 'node_modules'))
    ],
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    optimization: {
      noEmitOnErrors: true,
      namedModules: true,
      runtimeChunk: true
    },
    output: {
      path: PUBLIC_DIR,
      filename: path.join('js', '[name].js'),
      chunkFilename: path.join('js', '[name].js')
    }
  };
};
