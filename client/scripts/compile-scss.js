#!/usr/bin/env node

const autoprefixer = require('autoprefixer')
const csso = require('csso')
const fs = require('fs')
const sass = require('sass')

const inputFileName = __dirname + '/../src/styles/all.scss'
const outputFileName = __dirname + '/../www/static/style.css'

const autoPrefixedCss = autoprefixer.process(
  sass.renderSync({
    file: inputFileName,
    outFile: outputFileName,
  }).css,
).css

fs.writeFileSync(
  outputFileName,
  process.env.NODE_ENV === 'production'
    ? csso.minify(autoPrefixedCss).css
    : autoPrefixedCss,
)
