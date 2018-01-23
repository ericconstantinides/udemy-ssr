const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

// webpack allows us to write and compile JSX on the server

const config = {
  // Inform webpack that we're building a bundle for Node
  // - not for the client
  target: 'node',

  // Tell webpack the root:
  entry: './src/index.js',

  // Where to put the generated file:
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // ignores node_modules when bundling in Webpack:
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
