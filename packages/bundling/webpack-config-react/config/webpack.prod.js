const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ROOT_DIR = fs.realpathSync(process.cwd());
const BUILD_DIR = path.resolve(ROOT_DIR, 'dist');

const plugins = [
  new CleanPlugin(),
  new CssMinimizerPlugin(),
  new MiniCssExtractPlugin({
    filename: path.join('css', '[name].[chunkhash].min.css')
  }),
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
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: (module, chunks, cacheGroupKey) => {
            const moduleFileName = module
              .identifier()
              .split('/')
              .reduceRight((item) => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'all'
        }
      }
    },
    runtimeChunk: true
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: path.join('js', '[name].[chunkhash].min.js'),
    chunkFilename: path.join('js', '[name].[chunkhash].min.js')
  }
};
