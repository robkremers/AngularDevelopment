"Use strict";
/*
Derek Banas: TypeScript Tutorial
- https://www.youtube.com/watch?v=-PR_XqW9JJU&t=1s

Code & Transcript : https://goo.gl/GDuzMc
Best TypeScript Book : http://amzn.to/2d6ZjmM
Support me on Patreon : https://www.patreon.com/derekbanas

00:30 Install
03:07 Data Types
04:53 Writing to Browser
07:47 Conversion
09:16 Interfaces Pt 1
10:43 Arrays
13:10 Math
16:28 Let
18:31 Looping
20:10 Functions
26:36 Classes
31:13 Getters & Setters
33:44 Inheritance
36:10 Interfaces Pt 2
39:08 Generic Functions
41:53 Generic Classes
45:10 Destructoring
46:49 Template Strings
47:37 Spread Operator

In this tutorial we'll explore everything you'd learn in a standard 200 page book on TypeScript. I'll cover installation, data types, changing the browser, arrays, math, looping, functions, classes, interfaces, inheritance, generic functions, generic classes, destructoring, template strings, spread operator, and many other topics.
*/

/*
You can just add a value to a parameter and later add a value of a different type, as allways in JavaScript.
However TypeScript offers the possibility to indicate the type of the parameter.
Later we'll see that apart from primitive types also defined types are possible.

*/
var myName: string = "Rob";
var myAge: number = 56;
var canVote: boolean = true;
var anything: any = "dog";

anything = 2;
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;

document.write("myName is a " + typeof(myName) + "</br>");
document.write("myAge is a " + typeof(myAge) + "</br>");
document.write("canVote is a " + typeof(canVote) + "</br>");
document.write("anything is a " + typeof(anything) + "</br>");

var strToNum: number = parseInt("5");
var numToStr: number = 5;
document.write("numToStr is a " + typeof(numToStr.toString()) + "</br>");

const PI = 3.14159;
document.writeln("PI = " + PI + "</br>");

/* Interfaces */

interface SuperHero {
    realName: String,
    superName: string
}

var superman: SuperHero = {
    realName: "Clark Kent",
    superName: "Superman"
}

document.writeln(superman.realName + " is " + superman.superName + "</br>");

/* Arrays */
var employees: string[] = ["Bob", "Sally", "Sam"];
document.write(employees.toString() + "</br>");

var superHeroes: SuperHero[] = [];
superHeroes.push( {
    realName: "Bruce Wayne",
    superName: "Batman"
});
document.write(superHeroes[0].superName + " is " + superHeroes[0].realName + "</br>");

/* Math */
var randNum: number = 1;
document.write("randNum++ = " + randNum++ + "</br>");
document.write("++randNum = " + ++randNum + "</br>");
document.write("randNum-- = " + randNum + "</br>");
document.write("--randNum = " + --randNum + "</br>");

/* The let operator versus the var operator. 

In the following example:
The let statement will define a parameter that will not have it's value
changed within a code block.
When using the var statement this will be the case.
(To be honest: within the same code block: depends on what you are used to.)
*/

let sampLet = 123;
if (true) {
    let sampLet = 456;  // Only exists within the scope between {}.
}
document.write("sampLet = " + sampLet + "</br>");

var sampVar = 123;
if (true) {
    var sampVar = 456; // Will change the value of a variable outside the scope.
}
document.write("sampVar = " + sampVar + "</br>");

/* Loops */
let randArray = [5, 6, 7, 8];
document.write("Writing the values of the array randArray.</br>");
for(var val in randArray) {
    document.write("randArray[" + val + "] = " + randArray[val] + "</br>");
}

/**
 * In cas of a for loop the iteration parameter 
 * has to be defined beforehand.
 */
document.write("Writing the values of the array randArray using a for loop.</br>");
let i: number = 0;
for(i = 0; i < randArray.length; i++) {
    document.write("randArray[" + i + "] = " + randArray[i] + "</br>");
}

var strArray = randArray.map(String);

document.write("Writing the values of the strArray. <br />");
for (var val of strArray) {
	document.write(val + "<br />");	
}

/* Functions */

var getSum = function( number1: number
                     , number2: number): number {
                         return number1 + number2;
                     };

var theSum1: number = getSum(2, 5);
document.write("2 + 5 = " + theSum1 + "</br>");

/**
 * The use of default values and varargs in functions.
 * Also an example of the use of 'typeof'and 'undefined' versus null.
 */
var getDiff = function( number1: number
                      , number2: number = 2
                      , number3?: number) : number {
                        if (typeof(number3) != 'undefined') {
                            return number1 - number2 - number3;
                        } else {
                            return number1 - number2;
                        }

                      };

document.write("5 - 2 = " + getDiff(5) + "</br>");
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "</br>");

/* 
	In the following construction the input numbers (can be a variable 
	number) are added to array.
	In TypeScript these parameters are called Rest Parameters.
	(in Java variable arguments).
	nums.reduce: like the Java Lambda functions. 
https://www.tutorialspoint.com/typescript/typescript_array_reduce.htm
	reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

	Also: if nothing is returned this is indicated by return 'void'.

*/

var sumAll = function(...nums: number[]) : void {
    var sum: number = nums.reduce((a, b) => a + b, 0); // '0'is the default value.
    document.write("sum = " + sum + "</br>");
}

sumAll(1, 2, 3, 4, 5);

/*  Arrow / Lambda functions */

var AddOne = (x) => x + 1;
document.write("1 + 1 = " + AddOne(1) + "</br>");

// Continue tomorrow: 26:34 / 49:20.
