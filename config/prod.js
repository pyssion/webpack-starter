const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const appFileName = 'index.js'
const templateFile = 'assets/index.tpl'

module.exports = (config) => {
  const { srcDir, distDir, nodeModulesDir } = config
  return {
    // Webpack creates a graph of all your application's dependencies.
    // The starting point of this graph is known as an entry point.
    entry: `./${appFileName}`,
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

    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: templateFile,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
          warnings: false,
        },
        comments: false,
      }),
    ],

    context: srcDir,

    target: 'web',

    stats: 'normal',
  }
}
