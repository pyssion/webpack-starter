const { resolve } = require('path')
const webpack = require('webpack')

const rootDir = __dirname
const srcDir = resolve(rootDir, 'src')
const distDir = resolve(rootDir, 'dist')
const appName = 'index.js'

const basicConfig = {
  // webpack创建依赖图的入口
  entry: resolve(srcDir, appName),
  // webpack生成打包后文件的处理配置
  output: {
    path: distDir,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /.css$/, use: ['style-loader', 'css-loader?modules'] },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [srcDir, 'node_modules'],
  },
  devtool: 'cheap-source-map',
}

module.exports = basicConfig
