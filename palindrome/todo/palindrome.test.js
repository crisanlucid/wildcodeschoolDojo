const assert = require('assert');
const palindrome = require('./palindrome.js');

describe('palindrome test', () => {
    it('should be loaded', () => assert.equal(true, true));

    it('Should be true with "Rarecar"', () =>  {
        
            return assert.equal(palindrome("racecar"), true);
        }
    );

    it('Should be true with "Won\'t cat lovers revolt ? Act now!"', () => {
    return  assert.equal(palindrome("Won't cat lovers revolt? Act now!"), true);
        
    });

    it('Should be false with !!!! "hello world"', () => assert.equal(palindrome("hello world"), false));
});

