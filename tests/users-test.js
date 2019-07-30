/* eslint-disable no-undef */
var assert = require('assert');
describe('Family', function() {
	describe('#members', function() {
		it('should throw not full when members are not five', () =>{
			assert.equal([1,2,3,4,5].length,5);
		});
	});
});