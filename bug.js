function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This will cause unexpected behavior if the function is called with non-number arguments
  }
  return a / b; // This may throw a TypeError if a or b is not a number
}

console.log(myFunc(10, 0)); // Returns 0
console.log(myFunc(10, '0')); // Returns Infinity
console.log(myFunc(10, null)); // Throws TypeError
console.log(myFunc(undefined, 10)); // Throws TypeError