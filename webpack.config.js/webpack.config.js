//package.json中需要设置script
// "build":"cross-env NODE_ENV=production webpack --mode=production"-------该项用于打包
// "dev":"cross-env NODE_ENV=development webpack serve --mode=development"------------启动热更新，自动打包


//需要安装的依赖：
//npm i webpack webpack-cli --save-dev（安装webpack）
// npm install--save - dev html - webpack - plugin（html打包插件）
//npm i css-loader style-loader --save-dev（css打包加载器）
// npm install less less - loader--save - dev（less打包加载器）
//npm install --save-dev mini-css-extract-plugin（单独打包css文件，不会放入js中）
//npm install css-minimizer-webpack-plugin --save-dev（压缩打包的css文件）
//npm i webpack-dev-server --save-dev(热更新服务)
//npm install --save-dev html-loader(打包html内的img标签图片)
//npm i cross-env --save-dev(打包模式应用，针对不同环境采用不同的打包方式)


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  //模式设置为开发环境,打包模式
  mode: 'development',
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
    filename: path.resolve(__dirname, ''),
    //更改title
    title: 'Development',
  }),
  //添加css补丁
  new MiniCssExtractPlugin({
    //-------------此处为输出的出口以及文件名，css需要在js文件中import引入,此处的filename需要填写相对路径，也就是dist为起点
    filename: ''
  })],

  //添加加载器
  module: {
    rules: [
      //单独打包css文件
      {
        test: /\.css$/i,
        use: [process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
      },
      //单独打包less文件
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          process.env.NODE_ENV === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      //打包图片文件，js文件需要单独引用
      {
        test: /\.(png|jpg|gif|svg|jpeg|webp)$/,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },
      //打包html内的img标签图片,规定只打包以下格式
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            sources: {
              list: [
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src',
                },
                {
                  tag: 'img',
                  attribute: 'srcset',
                  type: 'srcset',
                },
                {
                  tag: 'link',
                  attribute: 'href',
                  type: 'src',
                  filter: (tag, attribute, attributes) => {
                    return attributes.some(attr =>
                      attr.name === 'rel' && attr.value === 'icon'
                    );
                  }
                }
              ]
            },
            esModule: false
          }
        }
      },
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