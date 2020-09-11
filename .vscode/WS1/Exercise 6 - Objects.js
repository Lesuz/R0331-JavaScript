// Exercise 6 - Objects

// Define and object to hold data for a person
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    address: "Right Here",
    telephone: 1234555,
    // Anonymous method
    printInfo: function() {
        return this.firstName + " " + this.last + " " + 
        this.age + " " + this.eyeColor + " " + this.address + 
        " " + this.telephone;
    }
};
var person2 = {
    firstName:"Susa",
    lastName:"Hämähäkki",
    age:24,
    eyeColor:"blue",
    address: "Right Here",
    telephone: 1234555,
    // Anonymous method
    printInfo: function() {
        return this.firstName + " " + this.last + " " + 
        this.age + " " + this.eyeColor + " " + this.address + 
        " " + this.telephone;
    }
};
var person3 = {
    firstName:"Ronja",
    lastName:"Holo",
    age:18,
    eyeColor:"blue",
    address: "Right Here",
    telephone: 1234555,
    // Anonymous method
    printInfo: function() {
        return this.firstName + " " + this.last + " " + 
        this.age + " " + this.eyeColor + " " + this.address + 
        " " + this.telephone;
    }
};
var person4 = {
    firstName:"Katja",
    lastName:"Rickert",
    age:50,
    eyeColor:"blue",
    address: "Right Here",
    telephone: 1234555,
    // Anonymous method
    printInfo: function() {
        return this.firstName + " " + this.last + " " + 
        this.age + " " + this.eyeColor + " " + this.address + 
        " " + this.telephone;
    }
};
// Printing return of anonymous function into console
// Add brackets to make sure the function "printInfo" is run
// console.log(person.printInfo());

var taulu = [person,person2,person3,person4];

// Printing every person's first- and last name into console
for(i = 0; i < taulu.length ; i++){
    console.log (taulu[i].firstName + " " + taulu[i].lastName)
}
