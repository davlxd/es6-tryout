var l = require('../lib/log');
var util = require('../lib/util');
var assert  = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('Test iterable utils', function(){
  it('test primItrEq', function(){
    let arr = ['a', 'b', 'c'];
    let arrAnother = ['a', 'b', 'c'];
    expect(util.primItrEq(arr, arrAnother)).to.be.true;

    arr = ['a', 'b', 'c'];
    arrAnother = ['a', 'b', 'c', 'd'];
    expect(util.primItrEq(arr, arrAnother)).to.be.false;

    arr = ['a', undefined, 'c'];
    arrAnother = ['a', 'b', 'c'];
    expect(util.primItrEq(arr, arrAnother)).to.be.false;

    arr = ['a', undefined, 'c'];
    arrAnother = ['a', 'b', 'c'];
    expect(util.primItrEq(arr, arrAnother)).to.be.false;

    arr = [];
    arrAnother = [];
    expect(util.primItrEq(arr, arrAnother)).to.be.true;
  })

  it('test zip', function(){
    let arr = ['a', 'b', 'c'];
    let arrAnother = [0, 1, 2, 3];

    let zipped = util.zip(arr, arrAnother);
    let ret = util.primItrEq(zipped, [[ 'a', 0 ], [ 'b', 1 ], [ 'c', 2 ], [undefined, 3]]);
    expect(ret).to.be.true;

    ret = util.primItrEq(zipped, [[ '', 0 ], [ 'b', 1 ], [ 'c', 2 ], [undefined, 3]]);
    expect(ret).to.be.false;

  })

})
