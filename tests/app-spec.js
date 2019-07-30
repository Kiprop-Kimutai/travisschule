/* eslint-disable no-undef */
const expect = require('chai').expect;
const server = require('../app');

describe('test', () =>{
	it('should return a string', () =>{
		expect('ci with travis').to.equal('ci with travis');
	});
});

describe('serverStatus', function() {
	it('should be listening', () =>{
		expect(server.listening).to.equal(true);
	});
});

