const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'sprite.field.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'var',
    library: 'SpriteField'
  },
  node: {
    fs: 'empty'
  },   
  module: {
    rules: [   
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        },
        {
          test: /\.glsl$/,
          loader: 'webpack-glsl-loader'
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        }
    ]
  }
}