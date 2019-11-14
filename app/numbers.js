// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
  let sum = x + y;
  return sum;
}

// Write a function that returns the Cubed value of x
function cubed(x) {
  let end = x * x * x;
  return end;
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
  let remainder = x % y;
  let result = (x - remainder) / y;
  return result;
}

// Write a function that takes in a number and determines if it is even.
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
  let remainder = num % 2;
  if (remainder == 1) {
    return false;
  } else {
    return true;
  }
}

// Given 2 numbers, generate a random number within that range.
// Make it inclusive so that the starting and ending numbers are part
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
  min = Math.ceil(num1);
  max = Math.floor(num2);
  Range = max - min;
  Random = Math.floor(Math.random() * (Range + 1) + min);
  return Random;
}
