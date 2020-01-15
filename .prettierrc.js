/*
 * @Author: Eilvein
 * @DeveloperSite: http://eilvein.cn
 * @Date: 2019-11-15 16:48:16
 * @LastEditors  : ROOBO FE
 * @LastEditTime : 2020-01-15 15:21:25
 * @Descripttion: .prettierrc.js
 */
module.exports = {
    eslintIntegration: true,
    printWidth: 150, // 每行代码长度（默认80）
    tabWidth: 4, // 每个tab相当于多少个空格（默认2）
    useTabs: false, // 是否使用tab进行缩进（默认false）
    semi: false, // 声明结尾使用分号(默认true)
    singleQuote: true, // 使用单引号（默认false）
    quoteProps: 'as-needed', // 引用对象中的属性时更改
    tailingComma: 'none', // 多行使用拖尾逗号（默认none）
    bracketSpacing: true, // 对象中的空格 默认true
    jsxBracketSameLine: true, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
    arrowParens: 'avoid', // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
    htmlWhitespaceSensitivity: 'ignore'
}
