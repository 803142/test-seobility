const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
      main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
        title: 'test Seobility',
        template: path.resolve(__dirname, './src/template.html'),
        filename: 'index.html',
    }),
    new Dotenv()
  ],
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader?classPrefix!'],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        use: {
          loader: 'url-loader',
        },
     },
     {
      test: /\.(c|sa|sc)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'sass-loader'
      ],
     },
    ],
  }
}