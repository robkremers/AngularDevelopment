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

2018-03-15: do not run this via the commandline (node ./lib/tstut.js)
or va ctrl-F5 (Debug)
This typescript / javascript contains html related code
that only executes correctly in a browser.

I have only added everything to excercise adding Debug
and automating build.
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
/**
 * Note: 
 * By using '!' I indicate that this will not be a null reference.
 * This is a solution to:  error TS2531: Object is possibly 'null'.
 * 
 * https://stackoverflow.com/questions/40640663/strictnullchecks-and-getelementbyid/40640854#40640854
 */
// var myElement: string | null = document.getElementById("tsStuff")!.innerHTML = "My Name is " + myName;
var myElement: HTMLElement = document.getElementById("tsStuff")!;
myElement.innerHTML = "My Name is " + myName;

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
var randArray = [5, 6, 7, 8];
document.write("Writing the values of the array randArray.</br>");
for(var val in randArray) {
    document.write("randArray[" + val + "] = " + randArray[val] + "</br>");
}

/**
 * In case of a for loop the iteration parameter 
 * has to be defined beforehand.
 */
document.write("Writing the values of the array randArray using a for loop.</br>");
// let i: number = 0;
for(let i: number = 0; i < randArray.length; i++) {
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

var AddOne = (x:number) => x + 1;
document.write("1 + 1 = " + AddOne(1) + "</br>");

/* Classes. Java-like setup */

class Animal {

    private _weight: number;
    public favFood: string;

    static numOfAnimals: number = 0;

    constructor( private name: string
               , private owner: string) {
                   Animal.numOfAnimals++;
    }

    ownerInfo() {
        document.write( this.name + " is owned by " + this.owner + "</br>");
    }

    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

}

var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100; // Here the set function is called.

document.write("Spot's weight is " + spot.weight + "</br>");
document.write("# of animals is " + Animal.howManyAnimals() + "</br>");

/* Inheritance */

class Dog extends Animal {

    static numOfDogs: number = 0;

    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
        Dog.numOfDogs++;
    }

    static howManyDogs() {
        return Dog.numOfDogs;
    }
}

var grover = new Dog("Grover", "Jimmy");
document.write("After the declaration of Grover: <br />");
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
document.write("# of Dogs being Animals : " + Dog.howManyAnimals() + "<br />");
document.write("# of Dogs : " + Dog.howManyDogs() + "<br />");
document.write("Is a Dog an Animal: " + ( grover instanceof Animal) +"<br />");
// Checking whether a field exists.
document.write("Does grover have a name : " + ('name' in grover) + "<br />");

/* Inheritance Part 2. */

interface Vehicle {
    drive(): any;
}

// A class must implement all methods defined in an interface, like in Java.
class Car implements Vehicle {

    private _wheels: number = 0;

    // In Typescript only one constructor is possible.
    // Therefore make the parameters optional in order to allow for multiple situations.
    constructor(wheels: number) {
        this._wheels = wheels;
    }

    get wheels(): number {
        return this._wheels;
    }
    set wheels(wheels: number) {
        this._wheels = wheels;
    }

    drive(): void {
        document.write("The car drives with " + this.wheels + "</br>");
    }
}

class Bicycle implements Vehicle {

    private _wheels: number = 0;

    // In Typescript only one constructor is possible.
    // Therefore make the parameters optional in order to allow for multiple situations.
    constructor(wheels: number) {
        this._wheels = wheels;
    }

    get wheels(): number {
        return this._wheels;
    }
    set wheels(wheels: number) {
        this._wheels = wheels;
    }

    drive(): void {
        document.write("The bicycle drives with " + this.wheels + "</br>");
    }
}

var car = new Car(4);
var bicycle = new Bicycle(2);
car.drive();
bicycle.drive();

/* Gneric functions */

function GetType<T>(value: T): string {
    return typeof(value);
}

// As noted in the beginning it is not compulsory to declare a parameter with  specific type. In that case the type will be 'any'.
var aStr = "A String";
var aNum: number = 0;

document.write("Type of aStr: " + GetType(aStr) + "</br>");
document.write("Type aNum: " + GetType(aNum) + "</br>");

/**
 * The real use of generic functions is that this construction allows the use of any class instance that has implemented a specific interface.
 */

 function getWheels<T extends Vehicle>(vehicle:T) {
     return vehicle.drive();
 }
 getWheels(car);
 getWheels(bicycle);

 /* Generic Classes */

 /**
  * In the following is defined:
  * - A class is using a specific data type T.
  * - An add method:
  *     - Input: two parameters of type T.
  *     - Return: a parameter of type T.
  */
 class GenericNumber<T> {
     add: (value1: T, value2: T) => T;
 }

 // ---- Number ----
 var aNumber = new GenericNumber<number>();
 aNumber.add = function(x, y) { return (x + y); };

 document.write("5 + 4 = " + aNumber.add(5, 4) + "</br>");

 // ---- String ----
 var aStrNum = new GenericNumber<string>();
aStrNum.add = function(x, y) {
    return String(Number(x) + Number(y));
}

document.write("5 + 6 = " + aStrNum.add("5", "6") + "</br>");

/* Destructoriing */

var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;

document.write("x + y + z = " + x + y + z + "</br>");

// Now the values of the parameters are switched.
[x, y, z] = [z, y, x];
document.write("Switch: x + y + z = " + x + y + z + "</br>");

/* Template String */
var multStr = `I go on for 

many lines </br>`;
document.write(multStr);
document.write(`<b>${multStr}</b></br>`);

/**
 * The Spread operator:
 * Allows to separate values in an array into attributes in a function.
 */

 function theSum(x:number, y:number, z:number): void {
     document.write("Sum: " + (x + y + z) + "</br>");
 }

 let args = [4, 5, 6];

 /**
  * Apparently currently the spread operator is not supported.
  * Though this can be executed outside of Visual Studio Code.
  * 
  * See:
  * https://github.com/Microsoft/TypeScript/issues/14981
  */
//  theSum(...args: number[]):void;

 /* Enum types; the value  normally starts at 0. */

 enum Emotion {
     Happy =1,
     Sad,
     Angry
 }

 var myFeeling = Emotion.Angry;
 document.write("myFeeling: " + myFeeling + "</br>");


 /**
  * Some additional notes, watching Traversy Media.
  */

  // Definition of an array.
  let strArr: Array<string>;
  let boolArr: Array<boolean>;

  strArr = ['hello', 'world'];
  boolArr = [true, false];
  