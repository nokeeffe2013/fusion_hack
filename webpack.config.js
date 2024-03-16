const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    compress: true,
    port: 9000,
  },
};