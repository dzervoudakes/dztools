const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = (root) => {
  const APP_DIR = path.resolve(root, '..', 'src');
  const PUBLIC_DIR = path.resolve(root, '..', 'public');

  const styleLoader =
    process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader;

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [path.resolve(root, '..', 'node_modules')]
      }
    }
  };

  return {
    entry: {
      app: [path.resolve(APP_DIR, 'polyfills.js'), path.resolve(APP_DIR, 'index.jsx')]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)$/,
          include: APP_DIR,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        },
        {
          test: /\.(js|jsx|mjs)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          enforce: 'pre'
        },
        {
          test: /\.(css|scss)$/,
          exclude: /\.module\.(css|scss)$/,
          use: [styleLoader, 'css-loader', 'postcss-loader', sassLoader]
        },
        {
          test: /\.module\.(css|scss)$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                localsConvention: 'camelCase',
                importLoaders: 2,
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:5]'
                }
              }
            },
            'postcss-loader',
            sassLoader
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join('images', '[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join('media', '[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.join('fonts', '[name].[hash:7].[ext]')
          }
        }
      ]
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new HtmlPlugin({
        favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
        filename: 'index.html',
        template: path.resolve(PUBLIC_DIR, 'index.html'),
        minify: process.env.NODE_ENV === 'production' && {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.mjs', '.json', '.scss', '.css'],
      alias: {
        '@src': APP_DIR,
        '@shared': path.resolve(APP_DIR, 'components', 'shared')
      }
    }
  };
};
