import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/vue.js',
  // plugins: [terser()],
  output: {
    file: 'dist/highlightjs-vue.min.js',
    format: 'iife',
    name: "hljsVuePlugin",
    globals: {
      'highlight.js/lib/core.js': 'hljs'
    }
  }
};