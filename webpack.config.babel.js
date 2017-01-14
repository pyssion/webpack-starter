const { resolve } = require('path')

const srcDir = resolve(__dirname, 'src')
const distDir = resolve(__dirname, 'dist')
const nodeModulesDir = resolve(__dirname, 'node_modules')

const buildConfig = (env) => require('./config/' + env + '.js')({
  env,
  srcDir,
  distDir,
  nodeModulesDir,
})

module.exports = (env) => buildConfig(env)
