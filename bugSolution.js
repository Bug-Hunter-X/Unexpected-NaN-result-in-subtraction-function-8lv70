function myFunction(a, b) {
  // Convert both inputs to numbers before subtracting
  a = Number(a);
  b = Number(b);
  return a - b; 
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(5, 10.5)); // Output: -5.5
console.log(myFunction('5', 10)); // Output: -5