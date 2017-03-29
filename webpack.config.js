var webpack = require("webpack")
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.ts',
// multiple  lambda functions.
 /*entry: { 
        'function1/handler': './function1/lambda',
        'function2/handler': './function2/lambda'
    },*/

  target: 'node',
  externals: [nodeExternals("node_modules")], 
  module: {
    loaders: [
      { test: /\.ts(x?)$/, exclude: '/node_modules' , loader: 'ts-loader'},
      { test: /\.json$/, exclude: '/node_modules' , loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  output: {
    libraryTarget: 'commonjs',
    //path: './',
    path: path.join(__dirname, './dist/'),
    filename: 'handler.js'
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};