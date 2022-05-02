const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Dotenv = require('dotenv-webpack');
// ...
module.exports = () => {
  return {
    entry: [
      './code/index.jsx'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/index.js'
    },
    devServer: {
      port: 5000,
      historyApiFallback: true,
      headers: {
        // "Access-Control-Allow-Origin": "https://api.thegraph.com",
        "Access-Control-Allow-Origin": "https://ethgasstation.info",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }
    },
    node: {
      fs: "empty"
    },
    resolve: {
      // extensions: ['.tsx', '.ts', '.js', '.jsx'], typescript
      // extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '~': path.resolve(__dirname, 'code'),
        '~HELPERS': path.resolve(__dirname, 'code/helpers'),
        '~BASE': path.resolve(__dirname, 'code/Components/base'),
      }
    },
    devtool: "source-map",
      module: {
        rules: [
          // {
          //   test: /\.tsx?$/,
          //   loader: 'ts-loader',
          //   exclude: /node_modules/,
          // },
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        
        {
          test: /\.(css)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        },
  
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts'
              }
            }
          ]
        },
  
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'img'
              },
            },
          ],
        },
  
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
  
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },

        // {
        //   test: /\.(graphql|gql)$/,
        //   exclude: /node_modules/,
        //   loader: 'graphql-tag/loader'
        // }, 
        
        ]
      },
  
      plugins: [
        new Dotenv(),
        new HtmlWebPackPlugin({
          template: "./code/index.html",
          filename: "./index.html"
        }),
        new ExtractTextPlugin("style.css")
      ]

  }

};
