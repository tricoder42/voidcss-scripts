var path = require('path'),
    fs = require('fs'),
    sassTrue = require('sass-true'),
    config = require('./config.js');

fs.readdirSync(path.resolve(config.srcPath))
.filter(function(file) {
    console.log(file)
    return file.substr(-10) === '.test.scss'
}).forEach(function(file){
    var sassFile = path.join(config.srcPath, file)
    sassTrue.runSass({file: sassFile}, describe, it)
})
