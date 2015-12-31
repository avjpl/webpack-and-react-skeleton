var BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

var url = require('url');

module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './app.jsx',
    html: './index.html',
  },
  output: {
    path: __dirname + '/dist/',
    publicPath: 'http://dev-webpack:8080/',
    filename: 'js/app.js',
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: {
          target: 'http://dev-webpack:8080',
        }
      },
      {
        reload: true,
      }
    )
  ],
  devSever: {
    historyApiFallback: true,
    contentBase: __dirname + '/dist/',
    host: 'dev-webpack',
    port: 8080
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader!autoprefixer-loader!sass-loader'),
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      { test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      { test: /\.(woff|ttf)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './app', './app/components'],
    extensions: ['', '.js', '.jsx']
  }
};
