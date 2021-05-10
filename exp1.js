/* first JS program */
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log (yearlyRent);

/* program of if-statement */
const skyIsBlue = true;
if (skyIsBlue){
    console,log("The sky is blue!");
} else {
    console.log("The sky is not blue!");
}

/* program of while-loop */
var students = ["Matt", "Sarah", "Susan"];
while (students.lenght>0) {
    let students = students.pop();
    console.log(`Hello, ${students}`);
}

/* program of for-loop */
const character = 'a';
const timesToRepeat = 50;
let answer = ' ';
for ( let i=0; i<=timesToRepeat; i++){
    answer += character;
}
console.log(answer);

/* example of a function */
const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const MyHomeCountry = "USA";
function logOutYourHouse (city, state, country){
    console.log('You are from ${city},${state},${country}');
}
logOutYourHouse(myHomeCity,myHomeState,MyHomeCountry);

/* example of NaN */
var greeting = "Hello World";
var something = greeting / 2;
something;               //NaN
Number.isNaN(something); //true
Number.isNaN(greeting);  //false

// scope is where javascript engine looks for things, and the things it's looking for are these variables,identifiers.

/* example of blocl scoping */
var teacher = "Kyle";
{
    let teacher = "Suzy";
    console.log(teacher); //suzy
}
console.log(teacher);     //kyle

// closure is when a function "remembers" a function outside of it, even if you pass that function elsewhere