var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/handler.ts',
  target: 'node',
 externals: [nodeExternals()], 
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'src/handler.js'
  },
};