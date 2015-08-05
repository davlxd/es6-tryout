'use strict'
var l = require('./log');

function tokenGenerator(lexRules) {
  return function* tokenize(input) {

    let pos = 0;
    while (pos < input.length) {
      let matchedRuleArr = lexRules.map(function(rule){
        return {'rule': rule, 'match': rule[0].exec(input.substring(pos))};
      }).filter(function(ruleAndMatch){
        return ruleAndMatch.match != null && ruleAndMatch.match.index === 0;
      }).sort(function(matchedRule0, matchedRule1){
        return matchedRule1.match[0].length - matchedRule0.match[0].length;
      });

      let {rule, match} = matchedRuleArr[0];
      let lexAction = rule[1];
      let matchedStr = match[0];

      pos += matchedStr.length;

      let token = lexAction(matchedStr);
      if (token) {
        yield token;
      }
    }
  }
}

exports.tokenGenerator = tokenGenerator;
