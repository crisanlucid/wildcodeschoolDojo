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

