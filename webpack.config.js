const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve('process/browser'),
          zlib: require.resolve('browserify-zlib'),
          stream: require.resolve('stream-browserify'),
          util: require.resolve('util'),
          buffer: require.resolve('buffer'),
          asset: require.resolve('assert'),
          fs: require.resolve('browserify-fs'),
          path: require.resolve('path-browserify'),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: { env: {} },
        }),
        new NodePolyfillPlugin(),
      ],
    },
  },
};
