import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/vue.js',
  plugins: [terser()],
  external: [ "highlight.js/lib/core.js"],
  output: {
    file: 'dist/highlightjs-vue.min.js',
    format: 'iife',
    name: "hljsVuePlugin",
    interop: "default",
    globals: {
      'highlight.js/lib/core.js': 'hljs'
    }
  }
};