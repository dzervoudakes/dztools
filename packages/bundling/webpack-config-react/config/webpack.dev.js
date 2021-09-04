const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackDevServerWaitpage = require('webpack-dev-server-waitpage');
const FriendlyErrorsPlugin = require('@soda/friendly-errors-webpack-plugin');

const ROOT_DIR = fs.realpathSync(process.cwd());
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // Note for testing: the wait page middleware will not work using 'npm link'.
    // This is due to webpack-dev-server pointing to the local instance
    // of webpack when using symlinks to test new features.
    onBeforeSetupMiddleware: (server) => {
      server.app.use(webpackDevServerWaitpage(server, { theme: 'dark' }));
    },
    open: true,
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
    // Note for testing: the progress plugin will not work using 'npm link'.
    // This is due to webpack-dev-server pointing to the local instance
    // of webpack when using symlinks to test new features.
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
