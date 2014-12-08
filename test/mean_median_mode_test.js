'use strict';
// var expect = require('chai').expect;     // TOASTY Q? jshint error:  redefine expect ?
var mmm = require('../lib/mmm');

describe('lib MMM mean', function() {
  it('gets an accurate mean', function() {
    expect(mmm.mean([2, 4, 6, 8, 10])).to.equal(6);
  });
});

describe('lib MMM median', function() {
  it('gets an accurate median', function() {
    expect(mmm.median([4, 5, 6, 1, 7])).to.equal(5);
  });
});

describe('lib MMM mode', function() {
  it('gets an accurate mode', function() {
    expect(mmm.mode([5, 5, 6, 7, 3, 9, 5, 9])).to.equal('5');
  });
});
