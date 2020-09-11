// Exercise 3 - Conditionals

// Giving variables values
var  x = 50;
var order = "Beer";

// Depending on the value of x, something different can be output.
// Added console.log to every condition 
// Added some formatted output with HTML tags
if (x > 50) {
    document.write("<h1>He's over 50!</h1>");
    console.log("<h1>He's over 50!</h1>");
} else if (x <= 50 && x > 30) {
    document.write("<strong>Middle aged man</strong>, who ordered some " + order);
    console.log("<strong>Middle aged man</strong>, who ordered some " + order);
// Added age range 18-30
} else if (x <= 30 && x >= 18){
    document.write("Barely allowed to drink " + order);
    console.log("Barely allowed to drink " + order);
} else {
    document.write("It seems you are a bit underaged.");
    console.log("It seems you are a bit underaged.")
}