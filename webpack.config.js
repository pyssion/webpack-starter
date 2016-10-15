const path = require('path')

const babelLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
}

const BASE_DIR = path.resolve(__dirname)
const SRC_DIR = path.resolve(BASE_DIR, 'app')
const BUILD_DIR = path.resolve(BASE_DIR, 'build')
const ENTRY = path.resolve(SRC_DIR, 'app.js')

module.exports = {
  entry: ENTRY,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [babelLoader],
  },
}
