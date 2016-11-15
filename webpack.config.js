module.exports = {
  entry: './js/entry.js',
  output: {
    filename: './public/javascripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}
