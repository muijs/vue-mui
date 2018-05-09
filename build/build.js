'use strict'
require('./check-versions')()
process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const path = require('path')
const config = require('../config')
const webpack = require('webpack')
let webpackConfig = require('./webpack.build')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot), err => {
  if (err) throw err

  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    console.log(chalk.cyan('  Build complete.\n'))
  })

  webpackConfig = require('./webpack.build.min')

  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    console.log(chalk.cyan('  Build complete.\n'))
  })
})
