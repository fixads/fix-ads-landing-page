const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './accets/images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CssMinimizerWebpackPlugin({
      minimizerOptions: {
        preset: [
          "default",
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/images/*.png",
          to({ context, absoluteFilename }) {
            return "assets/images/[name][ext]";
          },
        },
        { from: 'src/favicon.ico', to: 'favicon.ico' },
        { from: 'src/robots.txt', to: 'robots.txt' },
        { from: 'src/sitemap.xml', to: 'sitemap.xml' },
        { from: 'src/faq/index.html', to : 'faq/index.html'}
      ],
    }),
  ],
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerWebpackPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
        // generator: [
        //   {
        //     type: "asset",
        //     implementation: ImageMinimizerPlugin.imageminGenerate,
        //     options: {
        //       plugins: ["imagemin-webp"],
        //     },
        //   },
        // ],
      }),
    ],
  },
};