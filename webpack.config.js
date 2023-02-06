const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|webp|ico|txt|xml)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CssMinimizerPlugin(),
    new ImageminWebpackPlugin({
      test: /\.(png|webp)$/i,
      plugins: [
        require('imagemin-pngquant') ({
          quality: [0.95, 1],
        })
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/favicon.ico', to: 'favicon.ico' },
        { from: 'src/robots.txt', to: 'robots.txt' },
        { from: 'src/sitemap.xml', to: 'sitemap.xml' },
        { from: 'src/images', to: 'images'},
      ],
    }),
  ],
};