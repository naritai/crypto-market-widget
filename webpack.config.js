const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    return prev[`process.env.${next}`] = JSON.stringify(env[next]);
  }, {});

  return {
    context: path.resolve(__dirname, 'src'),

    entry: './index',

    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, '/dist'),
      publicPath: '/',
    },

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
      new webpack.DefinePlugin({
        'process.env.REST_API_BASE': JSON.stringify(env['REST_API_BASE']),
        'process.env.WS_API_BASE': JSON.stringify(env['WS_API_BASE'])
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.css"
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
                htr: true,
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
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader'
          },
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
      historyApiFallback: true
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
  }
};