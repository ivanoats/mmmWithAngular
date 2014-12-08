/*jshint -W030 */     // thanks Gabe
/*jshint -W079 */
'use strict';
var chai = require('chai');
var expect = chai.expect;
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../../server.js');

var port = process.env.PORT || 3000;
var url = 'http://localhost:' + port;

describe('Testing mmm api test', function() {

  it('should calculate mean, median, and mode', function(done) {
    chai.request(url)
      .post('/mmm')
      .send([1, 2, 2, 3])
      .end(function(err, res) {
        expect(err).to.be.null;
        console.log(res.body);
        expect(res.body.mean).to.eql(2);
        expect(res.body.median).to.eql(2);
        expect(res.body.mode).to.eql('2');
        done();
      });
  });

});
