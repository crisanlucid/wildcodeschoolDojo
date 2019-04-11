'use strict';

module.exports = function strToLower(str) {
    //Your code here
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let oldchar = arr[i].charCodeAt(0)
        let newchar = "";
        if (oldchar >= 65 && oldchar <= 90) {
             newchar = String.fromCharCode(oldchar + 32);
        } else {
             newchar = String.fromCharCode(oldchar);
            console.log(newchar)
        }

      //  let ascii = arr[0].charCodeAt(0);
        ;
        
        newArr.push(newchar);
        
    }

    .map
    .filter
    .reduce
   // let oldchar = str.charCodeAt(0);
   // let newchar = String.fromCharCode(oldchar+32);
     console.log(newArr);
    return newArr.join('');


}