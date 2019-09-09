const CopyWebpackPlugin = require("copy-webpack-plugin");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const ExtraWatchWebpackPlugin = require("extra-watch-webpack-plugin");
const ExtractTextWebpsckPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const templates = require("./webpackpages.js");

module.exports = env => {
  const devMode = !env || !env.production;

  return {
    mode: devMode ? "development" : "production",
    entry: {
      main: "./scripts/site.js"
    },
    output: {
      path: path.resolve(__dirname, "_build"),
      filename: "scripts/main.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "58",
                      ie: "11"
                    }
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.scss$/,
          use: ExtractTextWebpsckPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: { sourceMap: true }
              },
              {
                loader: "sass-loader",
                options: { sourceMap: true }
              }
            ]
          })
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          exclude: "/fonts/",
          use: ["url-loader"]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts"
              }
            }
          ]
        }
      ]
    },
    devtool: "source-map",
    devServer: {
      open: process.platform === "darwin",
      host: "127.0.0.1",
      port: 8080,
      https: false,
      hotOnly: false,
      disableHostCheck: true,
      contentBase: path.join(__dirname, "_build"),
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    },
    plugins: [
      new NunjucksWebpackPlugin({
        templates: templates
      }),
      new ExtraWatchWebpackPlugin({
        dirs: ["templates"]
      }),
      new CopyWebpackPlugin(
        [
          { from: "images/**/*", to: "." },
          { from: "media/**/*", to: "." },
          { from: "data/**/*", to: "." },
          { from: "scripts/outer/*", to: "." },
          { from: "styles/outer/*", to: "." }
        ],
        {
          copyUnmodified: true
        }
      ),
      new ExtractTextWebpsckPlugin("styles/main.css")
    ],
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin(), new UglifyJsPlugin()]
    }
  };
};
