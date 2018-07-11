var path = require("path")

path: path.resolve(__dirname, './dist');
var cofnig = module.exports = {
    entry: './src/page/index/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js'
    }
}
module.exports = config;