// Exercise 4 - Loops

var arr = [];
// Math.random give a random number between 0 and 1
for (var i = 0; i < 15; i++){
    // Math.round rounds the number to the nearest integer
    // Multiplying Math.random with 100 to get numbers between 1 and 100
    // Putting the gotten number into a value for ease of use
     x = Math.round(Math.random()*100);
     // Pushing the random number into the array
     arr.push(x);
     // Printing the gotten number into console and onto website
     console.log(x);
     document.write(x);
}
// Printing array into console
console.log(arr);
// Printing onto website
document.write(arr);