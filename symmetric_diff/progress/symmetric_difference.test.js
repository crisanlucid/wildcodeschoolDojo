const assert = require('assert');
const sym = require('./symmetric_difference');

describe('Find the Symmetric Difference', _ => {

    it('should return true', () => {
        assert.equal(true, true);
    });

    it("sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].", () => {
        assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
    });

    it("sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]", () => {
        assert.deepEqual(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
    });

    it("sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].", () => {
        assert.deepEqual(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7]);
    });
    
});