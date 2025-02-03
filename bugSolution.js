function myFunc(a, b) {
  // Type checking and validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs gracefully
  }

  if (b === 0) {
    return Infinity; // Handle division by zero explicitly
  }

  return a / b;
}

console.log(myFunc(10, 0)); // Returns Infinity
console.log(myFunc(10, '0')); // Returns NaN
console.log(myFunc(10, null)); // Returns NaN
console.log(myFunc(undefined, 10)); // Returns NaN