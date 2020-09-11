// Exercise 5 - Functions walkthrough

// Returns true if age is over 18, otherwise returns false
// Added explanatory text messages
function areYouOldEnough (age) {
    if (age < 18){
        return false + " age is under 18";
    }else 
        return true + " age is over 18";
}
// Calling the function and pass returned value to the console or tothe document
console.log(areYouOldEnough(16));
document.write(areYouOldEnough(19));

// Call the value and pass the returned value to alert();
alert(areYouOldEnough(5));
alert(areYouOldEnough(25));