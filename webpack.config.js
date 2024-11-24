const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude:path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          'sass-loader',
        ],
        exclude:path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({parallel: true})
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    maxEntrypointSize: 2048000,
    maxAssetSize: 2048000
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'AH Space X', 
        template: 'src/templates/index.html' }),
        new Dotenv({
          path: path.resolve(__dirname, '.env')
        }),
        new MiniCssExtractPlugin()
   ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map'
};