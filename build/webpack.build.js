const path = require('path')
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.build.base')

const webpackConfig = merge(baseWebpackConfig, {
  entry: {
    // 为方便，同时编译less文件
    // 这里需要注意的是，在编译后的JS文件中，其默认导出的是最后一个入口，即这里的./src/index.js，见dist/vue-mui.js
    'vue-mui': ['./src/less/index.less', './src/index.js']
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: false, extract: true })
  }
})

module.exports = webpackConfig
