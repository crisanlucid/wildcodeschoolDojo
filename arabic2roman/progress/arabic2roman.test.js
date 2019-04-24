const assert = require('assert');
const arabic2roman = require('./arabic2roman');

describe('Test if a number in roman is correct', _ => {

	it('should return true', () => {
		assert.equal(true, true);
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

	it('should return CMXLIX if the number is 949', () => {
		assert.equal(arabic2roman(949), 'CMXLIX');
	});

	it('should return CDXCIV if the number is 494', () => {
		assert.equal(arabic2roman(494), 'CDXCIV');
	});

	it('should return IX if the number is 9', () => {
		assert.equal(arabic2roman(9), 'IX');
	});

	it('should return CMXCIX if the number is 999', () => {
		assert.equal(arabic2roman(999), 'CMXCIX');
	});

	it('should return CDXLIV if the number is 444', () => {
		assert.equal(arabic2roman(444), 'CDXLIV');
	});

	it('should return CDXCVIII if the number is 498', () => {
		assert.equal(arabic2roman(498), 'CDXCVIII');
	});

	it('should return MMMCMLXXXIX if the number is 3989', () => {
		assert.equal(arabic2roman(3989), 'MMMCMLXXXIX');
	});

});
