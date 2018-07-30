const path = require('path');

module.exports = {
  entry: './game/script.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
};
