//lenght of string
let stringTEXT = "This is a class on string methods"
console.log(stringTEXT.length)

let capitalLetter = stringTEXT.toUpperCase()
let smallLetter = stringTEXT.toLowerCase()
console.log(capitalLetter)
console.log(smallLetter)

let str = "   Hello World!   "
let trimmedStr = str.trim()
let frontTrimmedStr = str.trimStart();
let endTrimmedStr = str.trimEnd();
console.log(trimmedStr);
console.log(trimmedStr) = str.trimEnd()

console.log(trimmedStr)     
console.log(frontTrimmedStr)
console.log(endTrimmedStr)

let userName = "Esther";
if (signupName.trim() === userName){
    console.log("Welcome back, Esther!") 
}else {
    console.log("Invalid login information")
}

//indexof and includes
let user_email = "ateniolataye@gmail.com"
let email_index = user_email.indexOf("@") // return dataype: number
console.log(email_index)

let email_contain_at = user_email.includes("@") // return dataype: boolean
console.log(email_contain_at)

let starts = userName2.startsWith("techCrush")

let starts = userName.startsWith("techCrush") // return dataype: boolean
console.log(starts)

//split
const sentence = "LANGUAGES: JavaScript, Python, Java, C++"
let splitSentence = sentence.split(" ") // return dataype: array
console.log(splitSentence)
let example = "She is a girl, she is a teacher, she is eating"
console.log(example.toLowerCase().split("she"))