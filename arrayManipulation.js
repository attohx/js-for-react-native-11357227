function processArray(numbers) {
  // Create a new array to store the processed numbers
  let result = [];
  
  // Loops through each number in the input array. starts at 0 and then continues for
  //as long as i is less than the lenght of numbers. also continues to increase position
  //by 1 for each number

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    
    // Checks if the number is even
    if (num % 2 === 0) {
      // Squares the even number and adds it to the result array
      result.push(num * num);
    } else {
      // Triples the odd number and adds it to the result array
      result.push(num * 3);
    }
  }
  
  // Return the new array with processed numbers
  return result;
}

function formatArrayStrings(strings, numbers) {

  // creates a new array based on strings
  // takes the position of the string and the index number

  return strings.map((str, index) => {
    let num = numbers[index];

    // checks if the position of the string assigned by the processed
    // numbers are even or odd. and Uppercases or Lowercases the string respectively
    return num % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  });
}
