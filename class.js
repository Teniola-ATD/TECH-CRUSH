const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const scores = [250, 300, 200, 400, 180,160];
const filteredScores = scores.filter(score => score >= 300);
console.log(filteredScores);

const sum =[2000, 3000, 400, 100, 600];
const total = sum.reduce(ActiveXObject, curr) => acc + curr, 0);
console.log(total);

const colors = ["blue", "yellow", "red"];
//Remove "red"
const updateColors = colors.filter(color => color !== "red");
console.log(updateColors);

// Add "green"
updateColors.push("green");
console.log(updateColors);