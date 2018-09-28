import autoprefixer from 'autoprefixer'
import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import nodeResolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './main.js',
  output: {
    file: 'build/bundle.js', // Date.now().toString(16)
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    postcss({
      extensions: ['.scss'],
      plugins: [autoprefixer()],
      minimize: process.env.NODE_ENV === 'production',
      extract: true,
    }),
    babel({ exclude: ['node_modules/**', '**/*.scss'] }),
    nodeResolve(),
    commonjs(),
    globals(),
    builtins(),
    process.env.NODE_ENV === 'production' && terser(),
  ],
}
