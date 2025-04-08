const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  //设置文件入口
  //-----------此处需输入入口
  entry: '',
  //设置文件出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    //-----------此处需输入出口及文件名
    filename: '',
    clean: true
  },

  //添加html补丁
  plugins: [new HtmlWebpackPlugin({
    //------------以哪个html文件为模板输入
    template: path.resolve(__dirname, ''),
    //------------输出的出口以及文件名
    filename: path.resolve(__dirname, '')
  }),
  //添加css补丁
  new MiniCssExtractPlugin({
    //-------------此处为输出的出口以及文件名，css需要在js文件中import引入
    filename: ''
  })],

  //添加加载器
  module: {
    rules: [
      //单独打包css文件
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      //单独打包less文件
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      //打包图片文件，js文件需要单独引用
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ],
  },

  //压缩css文件大小
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};