/* 
    Create a function and find the Symmetric Difference
    Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
    Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).
    https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference/
*/
module.exports = function () {
    console.log(arguments);

    let arrA = arguments[0].filter( (value, index) => {
        return arguments[0].indexOf(value) === index;
    });
    let arrB = arguments[1].filter((value, index) => {
        return arguments[1].indexOf(value) === index;
    });
    let resArrA = arrA.filter(function (obj) { 
        console.log(arrA.indexOf(obj));
        return arrB.indexOf(obj) == -1;
    });
    let resArrB = arrB.filter(function (obj) {
        console.log(arrB.indexOf(obj));
        return arrA.indexOf(obj) == -1;
    });
    return resArrA
                .concat(resArrB)
                .sort();


// for (let i=0; i < arrA.length; i++){
//     console.log(`interationA ${i}: arrA=`  + arrA[i])
//     for(let j=0; j < arrB.length; j++) {
//         console.log(`iterationB ${j}: arrB=` + arrB[j])
//         if (arrA[i] === arrB[j]) {

//         }
//     }

};