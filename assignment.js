//Assignment

let customerName = "Teniola"
let customerAge = 35
let bookTitle = "How to get away with murder"
let bookPrice = 1500
let quantity = 10
let isstudent = true

console.log("customer Name) "+ customerName)
console.log("customer Age) "+ customerAge)
console.log("book Title) "+ bookTitle)
console.log("book Price) "+ bookPrice)
console.log("quantity) "+ quantity)
console.log("is student) "+ isstudent)  

// Arithmetic operation to calculate total price
let totalPrice = bookPrice * quantity
console.log("Total Price: $" + totalPrice)

//Comparison operation to check if the customer is eligible for a student discount
let isAdult = customerAge >= 18
let buyingManyBooks = quantity > 5
let isBookOneThousandFivehundred = bookPrice === 1500

console.log("Is the customer an adult? " + isAdult)
console.log("Is the customer buying more than 5 books? " + buyingManyBooks)
console.log("Is the book price exactly $1500? " + isBookOneThousandFivehundred) 

// Non Primitive data types
const customerOrder = {
    customerName: customerName,
    customerAge: customerAge,
    bookTitle: bookTitle,
    bookPrice: bookPrice,
    quantity: quantity

}