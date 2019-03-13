const path = require('path');

module.exports = {
  entry: {
    example: ['@babel/polyfill', './src/example.js'],
    
    index: './src/index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};