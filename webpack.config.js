const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        'process.env.API_KEY': JSON.stringify(env['API_KEY'])
      })
    ],
   
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader'
          },
        },
        // css-loader to bundle all the css files into one file 
        // style-loader to add all the styles inside the style tag of the document
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
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
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        "~services": path.resolve(__dirname, 'src/services/')
      }
    },
  }
};