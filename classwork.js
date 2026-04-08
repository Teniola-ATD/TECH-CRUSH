// classwork

const msg = "Hello, World! ";

// Remove extra spaces;
const trimmedmsg = msg.trim();
console.log(trimmedmsg);

//check if it starts with Hello;
const startsWithHello = trimmedmsg.startsWith("Hello");
console.log(startsWithHello);   

//check if it ends with World;
const endsWithWorld = trimmedmsg.endsWith("World!");
console.log(endsWithWorld); 

//convert to lowercase;
const lowerCaseMsg = trimmedmsg.toLowerCase();
console.log(lowerCaseMsg);  