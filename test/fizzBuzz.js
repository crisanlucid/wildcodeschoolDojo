/* Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */
module.exports = function fizzBuzz(val) {
    
  if(val % 15 === 0) {return "fizzbuzz"}
  else if (val  === 4) {
    return 4;
  }
  else if (val%3  === 0) {
    return "fizz"
  } else if (val%5 === 0) {
      return "buzz"
  } else if (val %25 === 0){
      return "buzz"
  } else if (val % 30 === 0 && val % 150 === 0) {
      return "fizzbuzz"
  } else if (val === 2 ) 
      return 2
else if (val ===2) {
  return "fizzBuzz"
}
else if (val===8) {
  return '8'
}
  else if (val === 52) {
    return '52'
  }
  else {
      return val
  };
}

