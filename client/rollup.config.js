import fs from 'fs'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const babelRc = JSON.parse(fs.readFileSync('.babelrc'))

babelRc.presets[0][1].modules = false

export default {
  input: 'src/javascript/main.js',

  output: {
    file: 'www/static/main.js',
    format: 'iife',
    sourcemap: process.env.NODE_ENV !== 'production',
  },

  plugins: [
    babel({
      ...babelRc,
      babelrc: false,
    }),

    nodeResolve(),
    commonjs(),

    process.env.NODE_ENV === 'production' && terser(),
  ],
}
