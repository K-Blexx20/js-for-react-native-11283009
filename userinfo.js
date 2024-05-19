// Add this to the existing arrayManipulation.js

// Function to format the array of strings based on the processed array of numbers
function formatArrayStrings(strings, processedNumbers) {
  if (strings.length !== processedNumbers.length) {
      throw new Error("Both arrays must have the same length.");
  }

  return strings.map((str, index) => {
      const num = processedNumbers[index];
      return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}

// Exporting the new function
module.exports.formatArrayStrings = formatArrayStrings;



