// Substring & Slice
const str = "Nigeria is awesome";
let nigeriaStr = str.substring(0,7);// Extract "Nigeria" Using Substring
let awesomeStr = str.slice(-7); //Extract "Awesome" using Slice
let isStr = str.slice(8,10); // Extract "Is" using slice
console.log(nigeriaStr)
console.log(awesomeStr)
console.log(isStr)

// Split
const names = "John,Jane,Doe";
let namesArray = names.split(","); //Split into an array using comma
let spacejoinedNames = namesArray.join(" "); //join with space instead
const path = "user/home/docs";
const splittedPath = path.split("/"); // Split path with /
const home = splittedPath[1]; // get "home" using splitted path
console.log(namesArray);
console.log(spacejoinedNames);
console.log(splittedPath);
console.log(home);

// Mix
const email = "user@example.com";
const splittedEmail = email.split("@");
const username = splittedEmail[0]; // get "user" using splitted email
const endsWithCom = email.endsWith(".com"); //check if email ends with ".com"
const replacedWithAt = email.replace("@", "AT"); // replace @ in the email with "AT"
console.log(username);
console.log(endsWithCom);
console.log(replacedWithAt);
