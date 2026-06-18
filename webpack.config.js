const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);
const envPath = resolveApp(".env");
const env = fs.existsSync(envPath)
  ? fs
      .readFileSync(envPath, "utf8")
      .split(/\r?\n/)
      .reduce((values, line) => {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
          return values;
        }

        const separatorIndex = trimmed.indexOf("=");

        if (separatorIndex === -1) {
          return values;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        const value = trimmed.slice(separatorIndex + 1).trim();

        values[key] = value;
        return values;
      }, {})
  : {};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|jpe?g|png|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      Pages: resolveApp('src/app/pages'),
      Components: resolveApp('src/app/components'),
      Assets: resolveApp('src/assets'),
      App: resolveApp('src/app'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        REACT_APP_GOOGLE_SCRIPT_URL: env.REACT_APP_GOOGLE_SCRIPT_URL,
      }),
    }),
  ],
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
    hot: true,
  },
};
