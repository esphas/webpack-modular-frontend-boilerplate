/**
 * Webpack Common Configs
 * Uses `process.env.NODE_END` to determine mode
 */
const isProduction = process.env.NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';

const babelOptions = require('./babel.config');

const paths = require('../helpers/paths');

const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @type {HtmlWebpackPlugin.Options[]}
 */
const htmlOutputs = [
  {
    filename: 'index.html',
    template: paths.src('index.html'),
  },
];

/**
 * Get Style Loaders
 */
function getStyleLoaders({ modules = false } = {}) {
  const sourceMap = !isProduction;
  const loaders = [
    {
      loader: 'style-loader',
      options: {
        sourceMap,
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        localIdentName: '[path][name].[local].[hash]',
        sourceMap,
        modules,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap,
      },
    },
  ];
  return loaders;
}

/**
 * @type {Webpack.Configuration}
 */
const config = {
  mode,
  entry: {
    main: paths.src('index.js'),
  },
  output: {
    path: paths.dist(),
    publicPath: '/',
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].chunk.[contenthash].js',
  },
  module: {
    rules: [
      // lint
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      { oneOf: [
        // Javascript
        {
          test: /\.(js|mjs|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions,
            },
          ],
        },
        // Stylesheets (module)
        {
          test: /\.m\.css$/,
          use: getStyleLoaders({ modules: true }),
        },
        // Stylesheets (global)
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },
        // Images
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        // Pug
        {
          test: /\.pug$/,
          use: [ 'pug-loader' ],
        },
        // Fallback: file-loader
        {
          exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
          use: [ 'file-loader' ],
        },
      ] },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: isProduction ? false : 'inline-source-map',
  context: paths.root(),
  stats: 'minimal',
  devServer: {
    contentBase: paths.dist(),
    hot: true,
    open: true,
    stats: 'minimal',
  },
  plugins: [
    new CleanWebpackPlugin([ paths.dist() ], { root: paths.root() }),
    new CopyWebpackPlugin([
      paths.public(),
    ]),
    ...htmlOutputs.map((options) => new HtmlWebpackPlugin(options)),
    new Webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
