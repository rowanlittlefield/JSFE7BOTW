const path = require('path');

module.exports = {
  entry: './game/script.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  // module: {
  //   loaders: [
  //     { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
  //   ]
  // }
  module: {
  rules: [
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
  ]
}
};
