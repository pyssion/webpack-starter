const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const appFileName = 'index.js'
const templateFile = 'assets/index.tpl'

const port = 8987

// Webpack treats every file as a module.

module.exports = (config) => {
  const { srcDir, distDir, nodeModulesDir } = config
  // const srcDir = config.srcDir
  // const distDir = config.distDir
  // const nodeModulesDir = config.nodeModulesDir
  return {
    // Webpack creates a graph of all your application's dependencies.
    // The starting point of this graph is known as an entry point.
    entry: [
      // activate HMR for react
      'react-hot-loader/patch',

      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      `webpack-dev-server/client?http://localhost:${port}`,

      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',

      `./${appFileName}`,
    ],
    output: {
      path: distDir,
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    // Loaders in webpack transform files into modules as they are added to your dependency graph.
    // At a high level, they have two purposes in your webpack config:
    // 1. Identify what files should be transformed by a certain loader. (`test` property)
    // 2. Transform that file so it can be added to your dependency graph. (`use` property)
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          // include: [srcDir],
          exclude: /node_modules/,
          // issuer: { test, include, exclude },
          loader: 'babel-loader',
          options: {
            presets: [
              ['latest', { 'modules': false }],
              'stage-0',
              'react',
            ],
            plugins: [
              'react-hot-loader/babel',
            ]
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?modules&localIdentName=[local]___[hash:base64:5]&camelCase',
            'postcss-loader',
          ],
        },
        // Loaders for other file types can go here
      ],
    },

    resolve: {
      modules: [ // tell webpack what directories should be searched when resolving modules.
        srcDir,
        nodeModulesDir,
      ],
      extensions: ['.js', '.json', '.jsx', '.css'],
      alias: [],
    },

    // DllPlugin provides a better vendor-splitting.
    plugins: [
      // enable HMR globally
      new webpack.HotModuleReplacementPlugin(),

      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: templateFile,
      }),
    ],

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      contentBase: distDir,
      publicPath: '/',
      host: '0.0.0.0',
      port,
      historyApiFallback: true,
    },

    context: srcDir,

    target: 'web',

    stats: 'normal',
  }
}


// Note: __dirname refers to the root of your project.