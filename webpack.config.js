const path=require('path');
module.exports={
    mode:'development',
    entry:'./src/index',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader'
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    resolve:{
        extensions:[
            '.ts','.js'
        ]
    },
    devServer:{
        openPage:'/index.html'
    }
};