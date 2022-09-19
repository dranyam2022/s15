console.log("Hello World");

/*
    1. Create variables to store to the following user details:

    -first name - String
    -last name - String
    -age - Number
    -hobbies - Array
    -work address - Object

        -The hobbies array should contain at least 3 hobbies as Strings.
        -The work address object should contain the following key-value pairs:

            houseNumber: <value>
            street: <value>
            city: <value>
            state: <value>

    Log the values of each variable to follow/mimic the output.

    Note:
        -Name your own variables but follow the conventions and best practice in naming variables.
        -You may add your own values but keep the variable names and values Safe For Work.
*/

//Add your variables and console log for objective 1 here:




/*			
    2. Debugging Practice - Identify and implement the best practices of creating and using variables 
       by avoiding errors and debugging the following codes:

            -Log the values of each variable to follow/mimic the output.
*/
//1.Creating Variables
const firstName = "Maynard";
const lastName = "Escalante";
const myAge = 33;
const myHobbies = ["online gaming", "planting", "watching movies"]
const workAddress = {
    houseNumber: "blk 9 Lot 10",
    street: "Agus",
    city: "Lapu-lapu City",
    province: "Cebu",
    zipCode: "6015"
}
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Age: " + myAge);
console.log("Hobbies: ");
console.log(myHobbies);
console.log("Work Address: ");
console.log(workAddress);





//2. Debugging Practice
let myFullName = "Steve Rogers";
console.log("My full name is " + myFullName);

let age = 40;
console.log("My current age is: " + age);

let friends = ["Tony", "Bruce", "Thor", "Natasha", "Clint", "Nick"];
console.log("My Friends are: ");
console.log(friends);

let profile = {

    username: "captain_america",
    fullName: "Steve Rogers",
    age: 40,
    isActive: false,

}
console.log("My Full Profile: ")
console.log(profile);

let bestFriendsFullName = "Bucky Barnes";
console.log("My bestfriend is: " + bestFriendsFullName);

let lastLocation = "Arctic Ocean";
lastLocation = "Atlantic Ocean";
console.log("I was found frozen in: " + lastLocation);

