/* eslint-disable no-undef */
var assert = require('assert');
const expect = require('chai').expect;
describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function() {
			assert.equal([1,2,3,4].indexOf(5),-1);
		});
	});
});

describe('Array', function() {
	describe('#indexOf()', () =>{
		it('should return true when size of array matches', () =>{
			expect(([1,2,3,4].length).to.equal([1,2,3,4].length));
		});
	});
});