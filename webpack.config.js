const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})];

//webpack.config.js
module.exports = (env) => {
  const environment = env || 'production';

  return {
    mode: environment,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: './app.' + environment + '.js'
    },

    plugins,

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
      ]
    }
  }
};