const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackDevServerWaitpage = require('webpack-dev-server-waitpage');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const ROOT_DIR = fs.realpathSync(process.cwd());
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    before: (app, server) => {
      app.use(webpackDevServerWaitpage(server, { theme: 'dark' }));
    },
    contentBase: path.resolve(ROOT_DIR, 'src'),
    port: process.env.PORT || 8080,
    historyApiFallback: true,
    hot: true,
    compress: true,
    open: true,
    overlay: true,
    clientLogLevel: 'error',
    quiet: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new HardSourcePlugin(),
    new WatchMissingNodeModulesPlugin(path.resolve(ROOT_DIR, 'node_modules'))
  ],
  resolve: {
    alias: {
      'react-dom': require.resolve('@hot-loader/react-dom')
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
