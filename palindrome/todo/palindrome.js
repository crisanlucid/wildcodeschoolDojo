// Write a method called "palindrome" that checks if a given string is palindrome or not.

const palindrome = (text) => {


    let originalText = text.replace(/[\W]/g, '').toLowerCase();
    
    let textReverseTextCustom = originalText
            .split('')
            .reverse()
            .join('');

    console.log(textReverseTextCustom);
    return originalText === textReverseTextCustom ? true : false;

    //  let original = text
    //                  .replace(' ', '')
    //                  .replace('\'', '')
    //                  .replace('?', '')
    //                  .replace('!', '')
    //                  .toLowerCase();
    //  console.log(original);
    //  original.split('');
    //  console.log(original);
    //  original.reverse().join('');
    //  console.log(original);
    //  return original === text;
     


   // let original = text.replace(/[\w_]/g).toLowerCase();
    //console.log(original);
    //let letters = original.split('');
    //console.log(letters);
    //let reverse = letters.reverse().join('');
    //console.log(reverse);
    //return original === reverse;
}; 

module.exports = palindrome; 