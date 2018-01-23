const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
// webpack allows us to write and compile JSX on the server

const config = {
  // Tell webpack the entry point for the client:
  entry: './src/client/client.js',

  // Where to put the generated file:
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config)
