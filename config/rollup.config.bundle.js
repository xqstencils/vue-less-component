const path = require('path');
const vue = require('rollup-plugin-vue');
const css = require('rollup-plugin-css-only');
import commonjs from '@rollup/plugin-commonjs';
const { nodeResolve } = require('@rollup/plugin-node-resolve')

export default {
  input: path.resolve(__dirname, '../src/index.js'),
  output: {
    format: 'cjs',
    file: 'es/index.esm.js'
  },
  plugins: [
    nodeResolve(),
    // css(),
    commonjs(),
    vue(),
    // babel({
    //   babelHelpers: 'bundled'
    // })
  ],
  external(id) {
    return /^vue/.test(id)
  }
};
