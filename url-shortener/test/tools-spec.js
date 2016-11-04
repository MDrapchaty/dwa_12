var expect = require("chai").expect;
var tools = require("../lib/tools");
var api = require("../routes/api");
var request = require("supertest");

describe("printName()", function(){
	it("should print the last name first", function(){
		var results = tools.printName({ first: "Matt", last: "Drap"});

		expect(results).to.equal("Drap, Matt");
	});
});

describe('testing', function(){
	var server;
	beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () {
    
  });
  it('.get /v1/urls', function testSlash(done) {
  request(server)
    .get('/v1/urls')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
 
});