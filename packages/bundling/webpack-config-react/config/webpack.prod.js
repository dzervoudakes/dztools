const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ROOT_DIR = fs.realpathSync(process.cwd());
const BUILD_DIR = path.resolve(ROOT_DIR, 'dist');

const plugins = [
  new CleanPlugin(),
  new MiniCssExtractPlugin({
    filename: path.join('css', '[name].[chunkhash].min.css')
  }),
  new OptimizeCssAssetsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
];

if (process.argv.indexOf('--report') !== -1) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    hints: false
  },
  plugins,
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        extractComments: true,
        parallel: true,
        sourceMap: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: path.join('js', '[name].[chunkhash].min.js'),
    sourceMapFilename: path.join('js', '[name].[chunkhash].min.js.map'),
    chunkFilename: path.join('js', '[name].[chunkhash].min.js')
  }
};
