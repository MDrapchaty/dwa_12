var expect = require("chai").expect;
var tools = require("../lib/tools");
var api = require("../routes/api");
var request = require("supertest");
/*
describe("printName()", function(){
	it("should print the last name first", function(){
		var results = tools.printName({ first: "Matt", last: "Drap"});

		expect(results).to.equal("Drap, Matt");
	});
});
*/
// Testing get v1/urls route
describe('.post /v1/:url', function(){
  var server;
  beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () {
    
  });
  it('.get /v1/:url', function testPostUrls(done) {
  request(server)
    .post('/v1/:url')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
});


describe('.get /v1/urls', function(){
	var server;
	beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () {
    
  });
  it('.get /v1/urls', function testGetUrls(done) {
  request(server)
    .get('/v1/urls')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
});

// Testing get v1/url/:id route
describe('.get /v1/url/:id', function(){
  var server;
  beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () {
    
  });
  it('.get /v1/url/:id', function testGetUrlId(done) {
  request(server)
    .get('/v1/url/:id')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
});

// Testing delete v1/url/:id route
describe('.delete /v1/url/:id', function(){
  var server;
  beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () { 
  });
  it('.delete /v1/url/:id', function testDeleteUrlId(done) {
  request(server)
    .delete('/v1/url/:id')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
});


// Testing post v1/url/:id route
describe('.post /v1/url/:id', function(){
  var server;
  beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () { 
  });
  it('.post /v1/url/:id', function testPostUrlId(done) {
  request(server)
    .post('/v1/url/:id')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
});


// Testing get  /go/:shortURL
describe('.delete /go/:shortURL', function(){
  var server;
  beforeEach(function () {
    server = require('../src/server.js');
  });
  afterEach(function () { 
  });
  it('.get /go/:shortURL', function testGetShortUrl(done) {
  request(server)
    .get('/go/:shortURL')
    .set('Accept', 'application/json')
    .expect('Content-Type', "text/html; charset=utf-8", done);
  });
});

