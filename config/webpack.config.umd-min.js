const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
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
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].min.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2'
  },
  externals: externals,
  optimization: {
    minimize: true
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
