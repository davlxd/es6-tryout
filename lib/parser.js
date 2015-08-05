'use strict'

var l = require('./log');

function lalrParsingTable(yaccRules) {
  return yaccRules.map( rule => rule + '_' );
}

exports.init = function(yaccRules, tokens, ambiguousRules) {
  return {
    inspect() {
      l(yaccRules);
      l(tokens);
      l(ambiguousRules);
    },

    lalrParsingTable() {
      return lalrParsingTable(yaccRules);
    },

    parsingTable() {
      return lalrParsingTable(yaccRules);
    }
  }

}
