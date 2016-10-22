import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

/**
 * env shoule be either 'production' or 'development'
**/
module.exports = (env) => {
  const base_dir = path.resolve(__dirname)
  const src_dir = path.resolve(base_dir, 'app')
  const build_dir = path.resolve(base_dir, 'build')

  const entry = path.resolve(src_dir, 'app.js')
  const target = 'bundle.js'
  const template = path.resolve(src_dir, 'index.html')

  const port = 8787

  const config = {
    entry,
    output: {
      path: build_dir,
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['*', '.jsx', '.js'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins: [],
  }

  if (env === 'production') {
    config.plugins = config.plugins.concat([
      // clean build dir before doing more.
      new CleanWebpackPlugin(build_dir, {
        verbose: true, // Write logs to console.
      }),
      // optimization options
      new webpack.optimize.DedupePlugin(),
      // uglify
      new webpack.optimize.UglifyJsPlugin(),
    ])
  }
  
  if (env === 'development') {
    config.devtool = 'source-map'
    config.devServer = {
      inline: true,
      hot: true,
      progress: true,
      host: '0.0.0.0',
      contentBase: build_dir,
      port,
    }
  }

  config.plugins = config.plugins.concat([
    // the plugins that deals with html template and insert css and js tags in it
    new HtmlWebpackPlugin({
      template,
      minify: {
        removeComments: true,
      },
    }),
  ])

  return config
}
