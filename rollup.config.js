import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/vue.ts',
  plugins: [typescript(), terser()],
  external: [
    "highlight.js/lib/core",
    "vue"
  ],
  output: [
    {
      file: 'dist/highlightjs-vue.min.js',
      format: 'iife',
      name: "hljsVuePlugin",
      interop: "default",
      globals: {
        'highlight.js/lib/core': 'hljs',
        'vue': 'Vue',
      },
    },
    {
      file: 'dist/highlightjs-vue.esm.min.js',
      format: 'es',
      interop: "default",
      exports: 'default',
    },
  ],
};
