const assert = require('assert'); 
const arabic2roman = require('./arabic2roman'); 

describe('Test if a number in roman is correct', _ => {

	it('should return true', () => {
		assert.equal(true,true);
	});

	it('should return I if the number is 1', () => {
		assert.equal(arabic2roman(1), 'I');
	}); 

	it('should return V if the number is 5', () => {
		assert.equal(arabic2roman(5), 'V');
	}); 

	it('should return XX if the number is 20', () => {
		assert.equal(arabic2roman(20), 'XX');
	}); 

	it('should return MMXVII if the number is 2017', () => {
		assert.equal(arabic2roman(2017), 'MMXVII');
	}); 

}); 
