# webpack-starter

Pyssion's webpack starter kit.

## dependencies

Simply using React and React-Router to set up a starter kit with webpack.

### Step 1 - Add Babel support for react (and es2015)

First the babel

```shell
yarn add --dev babel-core babel-loader
```

then the presets

```shell
yarn add --dev babel-preset-react, babel-preset-es2015
```

then the webpack config

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
}
```

and the `.babelrc` config file

```json
{
  "presets": ["es2015", "react"]
}
```

### Step 2 - Remove build files before a new build process

Install the `clean-webpack-plugin`. [Referenc](https://github.com/johnagan/clean-webpack-plugin)e

```shell
yarn add --dev clean-webpack-plugin
```

and add the plugin config to the webpack config script

```javascript
new CleanWebpackPlugin(BUILD_DIR, {
  verbose: true, // Write log to console.
})
```

