var Mocha = require('mocha'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();

mocha.addFile(path.resolve(__dirname, './_test-suite.js'));
mocha.run();
