const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    library: 'pbcrypto',
    libraryTarget: 'umd', // universal module definition
    // the type of the exported library
    globalObject: 'this',
  }
});
