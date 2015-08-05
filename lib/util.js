'use strict'
var l = require('../lib/log');

function zip(...iterables) {
  let iterators = iterables.map(i => i[Symbol.iterator]());
  let done = false;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (!done) {
        let items = iterators.map(i => i.next());
        // done = items.some(item => item.done);
        done = items.reduce((item, itemAnother) => item.done && itemAnother.done);
        if (!done) {
          return { value: items.map(i => i.value) };
        }
        // Done for the first time: close all iterators
        for (let iterator of iterators) {
          if (iterator.return) {
            iterator.return();
          }
        }
      }
      // We are done
      return { done: true };
    }
  }
}



function primItrEq(...iterables) { // To judge if 2 primitive type formed iterable equals
  let zippedIterables = zip(...iterables);

  for (let pair of zippedIterables) {
    let element = pair[0];
    let elementAnother = pair[1];

    if (typeof element !== typeof elementAnother)
      return false;

    if (['boolean', 'number', 'string', 'undefined'].some(expectType => expectType === typeof element)) {
      if (element === elementAnother)
        continue;
      else
        return false;
    }

    if (element[Symbol.iterator] && elementAnother[Symbol.iterator]) {
      if (primItrEq(...pair))
        continue;
      else
        return false;
    }
    return false;

  }
  return true;
}

exports.zip = zip;
exports.primItrEq = primItrEq;

