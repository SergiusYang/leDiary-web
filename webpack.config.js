var path = require('path');
module.exports = {
    entry :'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:3000,
        host:"127.0.0.1",
        publicPath:"/dist"
    }
}