//postcss就是用来后处理css。也就是当stylus文件编译成css代码之后，通过postcss来优化我们的代码，优化的过程就是通过一系列的组件
const autoprefixer = require('autoprefixer');

module.exports={
    plugins:[
        autoprefixer() //处理需要加浏览器前缀的css属性，autoprefixer会自动配置前缀
    ]
}
