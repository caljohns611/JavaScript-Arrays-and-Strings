// task 1 //
let myString = "Hello, World";

let stringLength = myString.length;
console.log("The length of the string: ", stringLength);

// task 2 //
let mixed_case_string = "Hello, World";

let upper_case_string = mixed_case_string.toUpperCase();

let lower_case_string = mixed_case_string.toLowerCase();

console.log("original: ", mixed_case_string);
console.log("uppercase: ", upper_case_string);
console.log("lowercase: ", lower_case_string);

// task 3 //
let sentence = "The quick brown fox jumps over the lazy dog";

let extract_substring = sentence.substring(10, 43);
console.log("original: ", sentence);
console.log("extracted string: ", extract_substring);

// task 4 //
let sentence_2 = "The quick brown fox";

let array = sentence_2.split(" ");
console.log("original: ", sentence_2);
console.log("array: ", array);