const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 配置html模板
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 打包前清理打包文件夹
const webpack = require('webpack');
const postcssPresetEen = require('postcss-preset-env'); // 允许您将现代CSS转换为大多数浏览器可以理解的内容
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css插件
const sass = require('sass');
const babelConfig = require('./.babelrc.js');

// 生成css加载公共loader 全局和内部
const createCssLoader = (ext, postloader = undefined) => [
  {
    test: new RegExp(`\\.${ext}$`),
    exclude: new RegExp(`\\.module\\.${ext}$`),
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          // 在css-loader前应用的loader的数量：确保在使用import语法前先经过sass-loader和postcss-loader的处理
          importLoaders: postloader ? 2 : 1,
        },
      },
      {
        loader: 'postcss-loader', // postcss是为了来给浏览器内核添加私有前缀
        options: {
          plugins: [postcssPresetEen()],
        },
      },
      postloader,
    ].filter(Boolean), // filter过滤undefined
  },
  {
    test: new RegExp(`\\.module\\.${ext}$`),
    use: [
      'style-laoder',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: postloader ? 2 : 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [postcssPresetEen()],
        },
      },
      postloader,
    ].filter(Boolean),
  },
];

module.exports = () => {
  return {
    // 指定构建环境
    mode: 'development',
    // 入口文件
    entry: {
      app: './src/index.js',
    },
    // 输出文件
    output: {
      path: path.resolve(process.cwd(), 'build'),
      filename: 'js/[name].[hash:8].js',
      publicPath: '/', // 打包后的资源的访问路径前缀
    },
    devtool: 'eval-source-map', // 选择一种 source map 格式来增强调试过程
    // 配置模块如何解析
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      alias: {
        // src: path.resolve(__dirname, './src'),
        actions: path.resolve(__dirname, './store/actions'),
      },
    },
    // 模块
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          include: /src/,
          loader: 'eslint-loader',
          enforce: 'pre',
          // options: {
          //   fix: true,
          // },
        },
        {
          oneOf: [
            // 编译css文件
            ...createCssLoader('(sa|sc|c)ss', {
              loader: 'sass-loader',
              options: { sourceMap: true, implementation: sass },
            }),
            // 引入文件路径（图片，字体）
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 1024,
                    name: 'assets/[name].[hash:8].[ext]',
                  },
                },
              ],
            },
            {
              loader: 'file-loader',
              exclude: [/\.(m?js|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'assets/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(js|ts|tsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                cacheDirectory: true, // 避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程。
                presets: babelConfig.presets,
                ...babelConfig,
              },
            },
          ],
        },
      ],
    },
    // 插件
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../build/index.html'), // html模板的生成路径
        template: 'src/template.html', // html模板
        inject: true, // true：默认值，script标签位于html文件的 body 底部
        hash: true, // 在打包的资源插入html会加上hash
        //  html 文件进行压缩
        minify: {
          removeComments: true, // 去注释
          collapseWhitespace: true, // 压缩空格
          removeAttributeQuotes: true, // 去除属性引用
        },
      }),
      new webpack.NamedModulesPlugin(), // 以便更容易查看要修补(patch)的依赖
      new webpack.HotModuleReplacementPlugin(), // 热更新
      // 可以指定css输出目录(应在生产环境使用)
      new MiniCssExtractPlugin({
        filename: 'css/[name].[hash:8].css',
        chunkFilename: 'css/[name].[hash:8].chunk.css',
      }),
      // 可以压缩css
      new OptimizeCssAssetsPlugin(),
    ],
    // 开发环境本地启动的服务配置
    devServer: {
      hot: true,
      contentBase: ['build'], // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
      historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
      publicPath: '/', // 访问资源加前缀
      host: '0.0.0.0',
      port: 8081,
      stats: {
        entrypoints: false,
        children: false,
        assets: false,
        modules: false,
        builtAt: false,
        hash: false,
        version: false,
      },
      progress: true, // 显示编译进度
      proxy: {
        // 代理到后端的服务地址
        '/api': 'http://localhost:8001',
      },
      // overlay: {
      //   warnings: true,
      //   errors: true,
      // },
    },
  };
};
