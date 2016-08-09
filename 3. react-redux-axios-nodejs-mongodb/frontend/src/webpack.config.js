var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var modRewrite  = require('connect-modrewrite');

module.exports = {
  entry: "./src/app.jsx",
  watch: true,
  output: {
    filename: "./dist/assets/js/app.js",
    sourceMapFilename: "./dist/assets/js/app.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      },
      {
        loader: "style-loader!css-loader",
        test: /\.css$/
      }
    ]
  },
  resolve: {
    root: path.resolve('./'),
    extenstions: ['', '.js']
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./dist directory is being served
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['dist'],
        // rewrite all requests to index
        middleware: [
          modRewrite([
            '!\\.\\w+$ /index.html [L]'
          ])
        ]
      }
    })
  ]
};
