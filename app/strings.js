// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
  let char = str.charAt(position);
  return char;
}

// Write a function that will join two strings with an optional seperating character
function concat(str1, str2, seperator = " ") {
  let combo = str1 + seperator + str2;
  return combo;
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  let capString = str.charAt(position).toUpperCase();
  return capString;
}
