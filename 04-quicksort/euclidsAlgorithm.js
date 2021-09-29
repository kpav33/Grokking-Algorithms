// https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations

function euclidsAlgorithm(a, b) {
  if (b) {
    return euclidsAlgorithm(b, a % b);
  } else {
    return Math.abs(a);
  }
}

/*
Another example of recursive implementation
https://gist.github.com/zlw5009/2b886c3b87f964fde865b59dde19c685

function euclidGCD(num1, num2) {
  var gcd;
  
  if (num1 === num2) {
    gcd = num1;
  } else if (num1 > num2) {
    gcd = euclidGCD((num1 - num2), num2);
  } else if (num1 < num2) {
    gcd = euclidGCD(num1, (num2 - num1);
  }
  
  return gcd;
}
*/

console.log(euclidsAlgorithm(18, 48));
