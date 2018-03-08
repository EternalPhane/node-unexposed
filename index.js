'use strict';

const AsyncFunction = require('./async-function');
const GeneratorFunction = require('./generator-function');
const Generator = require('./generator');

const addGlobals = () => Object.assign(global, { AsyncFunction, GeneratorFunction, Generator });

Object.assign(addGlobals, {
  AsyncFunction, GeneratorFunction, Generator, addGlobals,
});

module.exports = addGlobals;
