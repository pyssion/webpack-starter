const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootDir = __dirname
const srcDir = resolve(rootDir, 'src')
const distDir = resolve(rootDir, 'dist')
// const nodeModulesDir = resolve(rootDir, 'node_modules')
const appName = 'index.js'
const port = 2017

const basicConfig = {
  // webpack创建依赖图的入口
  entry: [
    'react-hot-loader/patch',
    // `webpack-dev-server/client?http://localhost:${port}`,
    // 'webpack/hot/only-dev-server',
    resolve(srcDir, appName),
  ],
  // webpack生成打包后文件的处理配置
  output: {
    path: distDir,
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({ template: resolve(srcDir, 'assets/index.tpl') }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [srcDir, 'node_modules'],
  },
  devtool: 'cheap-module-eval-source-map',
  // will be picked up by webpack-dev-server
  devServer: {
    // hot: true,
    hotOnly: true, // don't refresh when error happens
    contentBase: distDir,
    historyApiFallback: true,
    port,
  },
}

module.exports = basicConfig
