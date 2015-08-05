'use strict'
var util = require('util');
var colors = require('colors/safe');

module.exports = function(...arg) {
  // let str = arg
  //     .map(obj => util.inspect(obj))
  //     .reduce((inspection, inspectionAnother) => inspection + ' ' + inspectionAnother);
  process.stdout.write(colors.grey('[' + Date().toString().split(' ')[4] + '] '));
  console.log(...arg);
};
