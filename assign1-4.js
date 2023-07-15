"use strict";
console.log('Hello Eric, would you like to learn some Python today?');
let MyName = "Ibrahim Khalil";
console.log("My name in title case " + MyName);
let MYNAMEUPER = "IBRAHIM KHALIL";
console.log("My Name in upper case " + MYNAMEUPER);
let myname = "ibrahim khalil";
console.log("My name in lowercase " + myname);
console.log('Quotation ');
console.log(' once a wise man said, "work hard expect for nothing life will be easier" ');
let famous_person = "wise man";
let Quote = " Work hard expect for nothing lofe wil be easier";
console.log(famous_person + ' said,' + Quote);
// Assignement 6 Stripping Names: Store a person’s name,
// and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces
const PersonName = "\t    Ibrahim    \n";
console.log('Orignal Name ' + PersonName);
//Name after striping 
const StrippedName = PersonName.trim();
console.log("Stripped Name " + StrippedName);
// Assignement 7: Number Eight: Write addition, subtraction, multiplication,
// and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results
console.log('Assignement 7');
console.log('addition 3+5 = ' + (3 + 5));
console.log('subtrsaction 10-2 = ' + (10 - 2));
console.log('mutiply 4*2 = ' + (4 * 2));
console.log('divsion 32/4 = ' + (32 / 4));
//Assignement 9 Favorite Number: Store your favorite number in a variable. 
//Then, using that variable,create a message that reveals your favorite number. Print that message
console.log('Assignement 9');
const Favorite_number = 7;
const Message = 'My favorite number is ' + Favorite_number;
console.log(Message);
// Assignement 10 Adding Comments: Choose two of the programs you’ve written, 
//and add at least one comment to each.
//If you don’t have anything specific to write because your programs are too simple at this point,
// just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does
console.log('Assignement 10 adding comment');
// Assignement 11 Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let MyFriendsName = ['Danish', 'Nabeel', 'Ali', 'Abbas', 'Zohaib'];
console.log('My Friend names are ');
for (let i = 0; i < MyFriendsName.length; i++) {
    console.log(MyFriendsName[i]);
}
//Assignement 12 Greetings: Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, 
//but each message should be personalized with the person’s name
let empty = null;
let Greetings = ['Danish', 'Nabeel', 'Ali', 'Abbas', 'Zohaib'];
for (let j = 0; j < Greetings.length; j++) {
    console.log('Hello, ' + Greetings[j]);
}
//Assignement 13 Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let Favorite_Transp = ['Bike', 'Car', 'Bus'];
console.log('Different Mode of transportation and its Benifits');
for (let k = 0; k < Favorite_Transp.length; k++) {
    let bike = ' : I like bike riding its more convenion ';
    let Car = ' : its more comfortable';
    let Bus = ' : Its cheaper way for transportation';
    let Massg = '';
    const Mode = Favorite_Transp[k];
    if (Mode === 'Bike') {
        Massg = Mode + bike;
    }
    else if (Mode === 'Car') {
        Massg = Mode + Car;
    }
    else if (Mode === 'Bus') {
        Massg = Mode + Bus;
    }
    console.log(Massg);
}
// Assignement 14:Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner. 
let GuestList = ['Aslam', 'Imran', 'Masam'];
console.log('invitation for Guest');
for (let s = 0; s < GuestList.length; s++) {
    const Guest = GuestList[s];
    console.log(Guest + ': your are invited for the dinner at my place');
}
GuestList.forEach((String) => {
    console.log('Dear ' + String + ': Your are invited for tonight Dinner at My Home ');
});
// Assignment 15: Changing Guest List: 
//You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite
const GuestListindex = 1;
const NewGuest = 'Ammar';
GuestList[GuestListindex] = NewGuest;
console.log('Updated invitation for Guest');
for (let s = 0; s < GuestList.length; s++) {
    const Guest = GuestList[s];
    console.log(Guest + ': your are invited for the dinner at my place');
}
