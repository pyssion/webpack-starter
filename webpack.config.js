const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const BASE_DIR = path.resolve(__dirname)
const SRC_DIR = path.resolve(BASE_DIR, 'app')
const BUILD_DIR = path.resolve(BASE_DIR, 'build')
const ENTRY = path.resolve(SRC_DIR, 'app.js')

const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
}

const cleanPlugin = new CleanWebpackPlugin(BUILD_DIR, {
  verbose: true, // Write logs to console.
})

module.exports = {
  entry: ENTRY,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [babelLoader],
  },
  plugins: [
    cleanPlugin,
  ],
}

