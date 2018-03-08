'use strict';

const AsyncFunction = require('./async-function');
const GeneratorFunction = require('./generator-function');
const Generator = require('./generator');

const addGlobals = () => Object.assign(global, { AsyncFunction, GeneratorFunction, Generator });

module.exports = {
  AsyncFunction, GeneratorFunction, Generator, addGlobals,
};
