// task 1 //
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

let remove_fruit = fruits.pop();
fruits.push('cherries');

console.log(remove_fruit);
console.log(fruits);

// task 2 //
let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers);

// task 3 //
let nums = [1, 2, 3, 4, 5, 6]

let doubleNums = nums.map(function(num) {
    return num * 2;
});

let oddNums = nums.filter(function(num) {
    return num % 2 !== 0;
});

let sum = nums.reduce(function(accumulator, num) {
    return accumulator + num
}, 0);

console.log("List of numbers: ", nums);
console.log("List of doubled numbers: ", doubleNums);
console.log("List of odd numbers: ", oddNums);
console.log("List of numbers added: ", sum);