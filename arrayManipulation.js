// arrayManipulation.js

// Function to process the array
function processArray(numbers) {
  return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}

// Exporting the functions for use in other files
module.exports = {
  processArray
};


