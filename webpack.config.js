/**
 * @Copyright: © 2014-2022 BICI All Rights Reserved,
 * webpack config for Bici FED web component library.
 */
'use strict';

const path = require('path');

function resolve(pathname) {
  return path.resolve(__dirname, pathname);
}

module.exports = {
  mode: 'production',
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'bici-design.js',
    library: 'BiciDesign',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    extensions: ['.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: resolve('src/assets/css'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        include: resolve('src/components'),
        use: ['style-loader', { loader: 'css-loader', options: { modules: true } }],
      },
      { test: /\.js$/, exclude: resolve('node_modules'), loader: 'babel-loader' },
    ],
  },
  externals: ['react', 'react-dom', 'prop-types', 'lodash', 'dayjs'],
};
