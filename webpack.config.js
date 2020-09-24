const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader'
  }];

  return loaders;
};

module.exports = () => {
  return {
    context: path.resolve(__dirname, 'src'),

    entry: './index',

    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, '/dist'),
      publicPath: '/',
    },

    devtool: isDev ? 'source-map' : false,

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Market Widget',
        meta: {
          viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      }),
      new ScriptExtHtmlWebpackPlugin({
        custom: [
          {
            test: /\.js$/,
            attribute: 'type',
            value: 'application/javascript'
          }
        ]
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: filename('css')
      })
    ],
   
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                htr: isDev,
                reloadAll: true
              }
            },
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ]
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                htr: isDev,
                reloadAll: true
              }
            },
            // Translates CSS into CommonJS
            'css-loader'
          ]
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: jsLoaders()
        },
      ]
    },

    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },

    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 9000,
      historyApiFallback: true,
      hot: isDev
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
  }
};