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
//npm i cross-env --save-dev(打包模式应用，针对不同环境采用不同的打包方式) process.env.NODE_ENV==='production'


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack')
const config = {
  //模式设置为开发环境,打包模式
  mode: 'development',
  //设置文件入口
  //-----------此处需输入入口
  entry: {
    '模块名1': '路径',
    '模块名2': '路径',
  },
  //设置文件出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    //-----------此处需输入出口及文件名
    filename: '',
    clean: true
  },

  //添加html补丁
  plugins: [
    //添加第一个html插件
    new HtmlWebpackPlugin({
      //------------以哪个html文件为模板输入
      template: path.resolve(__dirname, ''),
      //------------输出的出口以及文件名
      filename: path.resolve(__dirname, ''),
      //更改title
      title: 'Development',
      chunks: ['模块名'], //模块名需要一致，否走无法导入对应的js
      UseCdn: process.env.NODE_ENV === 'production' //useCdn用来判断是否使用Cdn，如果生产环境为production则适用，需要和html里import，link配套使用
    }),
    //添加第二个html插件
    new HtmlWebpackPlugin({
      //------------以哪个html文件为模板输入
      template: path.resolve(__dirname, ''),
      //------------输出的出口以及文件名
      filename: path.resolve(__dirname, ''),
      //更改title
      title: 'Development',
      chunks: ['模块名'],
      UseCdn: process.env.NODE_ENV === 'production'
    }),

    //添加css补丁
    new MiniCssExtractPlugin({
      //-------------此处为输出的出口以及文件名，css需要在js文件中import引入,此处的filename需要填写相对路径，也就是dist为起点
      filename: ''
    }),

    //添加definePlugin插件
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })
  ],

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
            esModule: false,
          }
        }
      },
    ],
  },

  optimization: {
    //压缩css文件大小
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      `...`,
      new CssMinimizerPlugin(),
    ],

    //代码分割
    splitChunks: {
      chunks: 'all',    //所有模块动态非动态移入的都分割分析
      cacheGroups: {      //分隔组
        common: {     //抽取公共模块
          minSize: 0,     //抽取chunk最小字节
          minChunks: 2,      //最小引用数
          reuseExistingChunk: true, //当前chunk包含已从bundle中拆分出的模块，则被重用
          name(module, chunks, cacheGroupKey) {
            const allChunksNames = chunks.map((item) => item.name).join('~') //模块名1~2
            return `./js/${allChunksNames}` //输出到dist目录下位置
          }
        },
      },
    },
  },

  //定义别名，省略绝对定位的语法长度
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

//当开发环境处于development时，启用详细的js报错，sourcemap
if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  //外部扩展（防止import被webpack打包）
  config.externals = {
    'key': 'value'
    //'key'为import from 语句后面的字符串，即为引用的地址
    //'value'为留在原地的全局变量，最好和cdn在全局暴露的变量一致
    //例如'axios':'axios'
  }
}
module.exports = config