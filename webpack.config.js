const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: './dist',
    filename: 'build.js'
  },
  module: {
    loaders: [
      { 
        test: /\.vue$/,
        loader: 'vue' 
      },
    ],
    rules: [
      {
        test: /¥.vue$/,
        use: 'vue-loader'
      }
    ]
  },
}