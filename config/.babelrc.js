// 用来解析ES6 5 准换成向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中
// corejs 提供了es5、es6的polyfills
// polyfills理解为 是一段代码(或者插件)，提供了那些开发者们希望浏览器原生提供支持的功能。程序库先检查浏览器是否支持某个API，如果不支持则加载对应的 polyfill)
module.exports = {
    presets: [
        ["@babel/preset-env", {
            useBuiltIns: 'usage', corejs: 3, modules: false,
            targets: {
                browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }], //可以在项目中使用装饰器语法
        ['@babel/plugin-proposal-class-properties', { loose: true }], //以在项目中使用新的 class 属性语法。
        '@babel/plugin-syntax-dynamic-import', //可以在项目中使用 import() 这种语法
    ]
}
