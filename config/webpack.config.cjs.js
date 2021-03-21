const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const components = require('./components.js');
const { VueLoaderPlugin } = require('vue-loader');

const externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
]

module.exports = merge(common, {
  mode: 'production',
  entry: components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  externals: externals,
  optimization: {
    minimize: false
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
