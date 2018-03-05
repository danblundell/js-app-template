// this file isn't transpiled so use CommonJS and ES5 only

// Register babel to transpile before tests run
require('babel-register')();

// disable webpack features mocha doesn't understand
require.extensions['.css'] = function() {};

