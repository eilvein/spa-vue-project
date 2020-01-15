const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const ISPROD = ['production', 'prod'].includes(process.env.NODE_ENV)
// console.log('+++++++++++++++++++')
// console.log(process.env.NODE_ENV)
// console.log('+++++++++++++++++++')

module.exports = {
    publicPath: ISPROD ? process.env.VUE_APP_PUBLIC_PATH : './',
    productionSourceMap: !ISPROD,
    runtimeCompiler: true,
    devServer: {
        open: ISPROD,
        host: 'fedev.roobo.net',
        proxy: {
            '/api': {
                target: 'http://aiedit-api.roobo.net',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@styles', resolve('src/assets/styles'))
            .set('@components', resolve('src/components'))
            .set('@plugins', resolve('src/plugins'))
            .set('@views', resolve('src/views'))
            .set('@router', resolve('src/router'))
            .set('@store', resolve('src/store'))
            .set('@layouts', resolve('src/layouts'))
            .set('@static', resolve('src/static'))
    }
}
