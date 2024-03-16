const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/js/'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    compress: true,
    port: 9000,
  },
};