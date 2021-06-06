const config = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, config, {
  mode: 'development',
  entry: {
    index: './home'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'home.html'
    })
  ]
})