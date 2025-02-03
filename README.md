# Unexpected NaN Result in JavaScript Subtraction Function

This repository demonstrates a subtle bug in a JavaScript subtraction function that results in `NaN` (Not a Number) when subtracting numbers of different types.

## Bug Description

The `myFunction` function is designed to subtract two numbers. However, if the input numbers are not strictly of the same type (e.g., a mix of integers and floating-point numbers), it may return `NaN`.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js` and run the code in a JavaScript environment (e.g., Node.js, browser console).
3. Observe the unexpected output of `NaN`.

## Solution

The solution involves ensuring that both inputs are converted to the same numeric type before performing the subtraction. The updated code in `bugSolution.js` showcases the fix. 

## Contributing

Feel free to contribute to this repository by suggesting improvements or reporting new bugs.