let mocha  = require('mocha');
let chai   = require('chai');
let expect = chai.expect
let sut    = require('../src/funcs');


describe('A success', function() {
  it('should return hello + input', function(done) {
    sut
      .hello('world')
      .then(function(result) {
        expect(result).to.equal('Hello world');
        done();
      })
      .catch(done);
  });
});

describe('An assertion failure', function() {
  it.skip('should be caught', function(done) {
    sut
      .hello('world')
      .then(function(result) {
        expect(result).to.equal('WRONG');
      })
      .catch(done);
  });
});

describe('An internal failure', function() {
  it.skip('should be caught', function(done) {
    sut
      .boom()
      .catch(done);
  });
});

describe('A non-existant function', function() {
  it.skip('should be caught', function(done) {
    sut
      .doesNotExist()
      .catch(done);
  });
});

describe('use of async function', function() {
  it('should be ok', async function() {
    sut.doAwait();
  });
});
