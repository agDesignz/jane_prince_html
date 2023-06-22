const path = require('path');

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app/assets/scripts/App.js'),
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  devServer: {
    watchFiles: ('./app/**/*.html'),
    static: { directory: path.join(__dirname, 'app') },
    hot: 'only',
    liveReload: false,
    port: 3000,
    host: '0.0.0.0'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: { postcssOptions: { plugins: postCSSPlugins } } }]
    }]
  }
}
