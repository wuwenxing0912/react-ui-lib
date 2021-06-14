const config = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: {
    home: './home.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'doc')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'home.html',
      filename: 'home.html'
    })
  ]
})