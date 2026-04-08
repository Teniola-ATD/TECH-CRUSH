const numbers = [2, 4, 6, 8, 10];
// Multiply each number by 2 and print it
numbers.forEach(function(num) {
  console.log(num * 2);
});

const names = ["Esther", "John", "Ada", "Mike"];
// Print greeting message for each name
names.forEach(function(name) {
  console.log("Hello " + name + "!");
});

const numbers2 = [1, 2, 3, 4, 5];
// Create a new array with squared values
const squaredNumbers = numbers2.map(function(num) {
  return num * num;
});
console.log(squaredNumbers);

const prices = [100, 200, 300];
// Apply 10% discount to each price
const discountedPrices = prices.map(function(price) {
  return price * 0.9; // 10% discount
});

console.log(discountedPrices);

const numbers3 = [5, 12, 8, 20, 3];
// Filter numbers greater than 10
const greaterThanTen = numbers3.filter(function(num) {
  return num > 10;
});

console.log(greaterThanTen);

const ages = [15, 22, 17, 30, 18];
// Filter ages 18 and above
const adults = ages.filter(function(age) {
  return age >= 18;
});
console.log(adults);

const numbers4 = [10, 15, 20, 25, 30];
// Step 1: Filter numbers greater than 20
const filteredNumbers = numbers4.filter(function(num) {
  return num > 20;
});

// Step 2: Double the remaining numbers
const doubledNumbers = filteredNumbers.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers);
