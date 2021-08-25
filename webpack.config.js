const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /.+\.(js|jsx|ts|tsx)/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /.+\.(s?css)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.ts', '.tsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
};