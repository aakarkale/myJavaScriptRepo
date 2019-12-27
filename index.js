console.log('Hello World!!!!!');
console.log('Testing the log feature of JS');


/*
Primitive Types - String, Number, Boolean, Undefined (undefined type) & NULL (object type)
Reference Types - Object, Arrays, Functions
*/

/*let is the best way to assign a value to a variable, There are other options like const for numbers.*/
let name = 'Aakar Arun Kale';
let age = 25;
let isMale = true;
let suffix = null;
let prefix = null;

console.log(name);
console.log(age);
console.log('Here is how you can log items using the console.log() function!!!')










//OBJECTS in JavaScript

let person = 
{
    firstName : 'Aakar',
    lastName : 'Kale',
    sex : 'Male',
    inRelationship : true,
    attendedSchool : true,
    ssn : 6692038173
};
console.log(person)

// You can also edit the value of any value you want, like this...
person.firstName = 'Aakar Arun';

console.log(person)
/*------------------------------------------------------------------------------------------------------------ */

// ARRAYS - It is a Data Structure which we use to represent a list of items.

let selectedColors = ['red','blue','green'];
console.log(selectedColors)
console.log(selectedColors[1])

let yourSelection = [1,2,3,4,5]
console.log(yourSelection)






// FUNCTIONS in JavaScript

function greet(name) //This is a parameterized function
{
    console.log('Hello '+name+ ' - I am a Function Call!!!');
}




// ------------------------------------------- EMPLOYEE Directory ----------------------------------------------


let employee = 
{
    firstName : 'Aakar',
    lastName : 'Kale',
    sex : 'Male',
    empPosition : 'Solutions Architect',
    attendedSchool : true,
    ssn : 6692038173,
    compensation : 552000
};

function calculateIncome(hourlyWage, noOfHours)
{
    return hourlyWage*noOfHours;
}

function calculateEmploymentPeriod(startYear, endYear)
{
    console.log('The Employee worked with us for '+ (endYear - startYear) + ' years');
}


// ----------------------------------------------- IF ELSE -------------------------------------------------------------

//The code below accepts input from the user in a pop-up format...

/*

var hour = prompt("Please enter the hour of the day in 24hour format!!", "Example: 16");

if (hour >= 6 && hour < 12)
{
   console.log("Good Morning Aakar!!"); 
}
else if(hour>=12 && hour <18)
{
    console.log("Good Afternoon Aakar!!!!")
}
else
{
    console.log("Good Night Aakar!!")
}

*/

// ----------------------------------------------- LOOPS -------------------------------------------------------------


for(let i=0; i<= 5; i++)
{
    console.log("Hello Aakar " +i)
}



 // --------------------------------------- FACTORY FUNCTIONS ------------------------------------------








// --------------------------------------- CONSTRUCTORS ------------------------------------------

function createEmployee(name)
{
    this.firstName = name;
    console.log(name)
}


// -------------------------------------- Cloning an Object -----------------------------------

//Here I will show you how to clone the PERSON object that we created above.

let anotherObject = Object.assign({}, person); //Using Object.assign()

let anotherObject2 = { ...person} //Using the "spread operator -  ..."

/* 
Shown above are the 2 ways in which you can clone objects and use 
all their properties and methods and add your own in this newly created object.
*/

let myname = "Aakar Kale"

const mymessage = `This is a Template Literal, make sure you see that these 
are NOT enclosed in "inverted commas".
Also, as you can see I wrote on a new line without having to use "/n" or any other escape characters.
We can also use placeholders like this - ${myname}.`


const numarray = [1,2,-1,-2,3,-4,5,6,8,-19,-12,13];
// if we want to filter the positive numbers

const posnumarray = numarray.filter(function(value)
{
    return value >= 0;
});


// Below is a simpler/smarter method to the same thing as shown above....

const easyposnumarray = numarray.filter(n => n>=0); 
/* As you can see we have used the assignment operator "=>" which states 
that "n such that n is more than or equal to 0" */

// The MAP method
const items = easyposnumarray.map(n => '<li>' + n + '</li>')

const joinedItems = items.join('\n');


/*
Chaining - You can write the above two lines of code in a 
much better way using the chaining property of JS.
*/

const chainedItems = easyposnumarray.map(n => '<li>' + n + '</li>').join('\n');

// REDUCE method for Arrays

let myarray = [1,2,3,4,100];

let sum = myarray.reduce((accumulator, currentValue) => accumulator+currentValue);
/*
In the code above the "accumulator" variable is used to keep adding the array values to it.
And the "currentValue" variable is used as the one which holds the current value of the accumulator,
it is the one which is going to be printed at last.
*/

function sayHello()
{
    for(let x=0; x<=5; x++)
    {
        console.log(x);
    }
}