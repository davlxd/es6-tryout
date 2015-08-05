'use strict'

var parser = require('../lib/parser');
var l = require('../lib/log');
var util = require('../lib/util');
var assert  = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('Parser test demo', function(){

  it('demo 1', function(){
    let yaccRules = ['yacc', 'rules'];
    let tokens = ['token', 's'];
    let ambiguousRules = ['ambiguous', 'rules'];

    parser = parser.init(yaccRules, tokens, ambiguousRules);

    let parsingTable = parser.lalrParsingTable()
    l(parsingTable);
  })

})


