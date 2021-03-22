const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './Client/index.jsx',
  output: {
    path: path.resolve(__dirname, './Public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },   
    ]
  }
}