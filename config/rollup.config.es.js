const path = require('path');
const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
// const components = require('./component.config.json');

const components = {
  "hello-01": "../src/components/hello-01/index.js"
};

export default Object.keys(components).map(key => ({
  input: path.resolve(__dirname, components[key]),
  output: {
    format: 'es',
    file: `es/${key}/index.js`
  },
  plugins: [
    // nodeResolve(),
    // css(),
    vue({
      css: true,
      compileTemplate: true
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}));
