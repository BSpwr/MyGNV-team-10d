const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new ErrorOverlayPlugin()],
  devtool: 'cheap-module-source-map', // Needed by error-overlay-webpack-plugin
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});
