module.exports = (isDev) => {
    return {
        preserveWhitespace: true, //去掉元素之间空格
        extractCSS: !isDev, //  判断是否打包vue文件中的css
        cssModules: {
            localIdentName: isDev?'[path]-[name]-[hash:base64:5]':'[hash:base64:5]',
            camelCase: true, //能将css中用 - 连接的类名转换成JavaScript中调用变量的小驼峰命名；
        },
        // hotReload:false, //根据环境变量生成
    }
}