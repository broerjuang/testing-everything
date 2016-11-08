'use strict'

const Ju= require('../controller/controller')

// Require Mocha
const mocha = require('mocha');
const assert = require('chai').assert;
const should = require('chai').should()


describe('#add', () => {
  it('should return when the value of each parameter is 1 and 1', () => {
  assert.equal(2, Ju.add(1,1))
  });
  it('the type of the function should be number if the given two parameters are Number', () => {
    assert.typeOf(Ju.add(1,5), 'number')
  });
  it('the type of the function should be number if the given two parameters are Number', () => {
    (Ju.add(1,'string')).should.equal(false)
  });
  it('If the given two parameters are string, return false instead', () => {
    (Ju.add('1','2')).should.equal(false)
  });
});
