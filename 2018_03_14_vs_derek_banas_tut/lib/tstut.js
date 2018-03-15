"use strict";
"Use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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

2018-03-15: do not run this via the commandline (node ./lib/tstut.js).
This typescript / javascript contains html related code
that only executes correctly in a browser.

*/
/*
You can just add a value to a parameter and later add a value of a different type, as allways in JavaScript.
However TypeScript offers the possibility to indicate the type of the parameter.
Later we'll see that apart from primitive types also defined types are possible.

*/
var myName = "Rob";
var myAge = 56;
var canVote = true;
var anything = "dog";
anything = 2;
/**
 * Note:
 * By using '!' I indicate that this will not be a null reference.
 * This is a solution to:  error TS2531: Object is possibly 'null'.
 *
 * https://stackoverflow.com/questions/40640663/strictnullchecks-and-getelementbyid/40640854#40640854
 */
// var myElement: string | null = document.getElementById("tsStuff")!.innerHTML = "My Name is " + myName;
var myElement = document.getElementById("tsStuff");
myElement.innerHTML = "My Name is " + myName;
document.write("myName is a " + typeof (myName) + "</br>");
document.write("myAge is a " + typeof (myAge) + "</br>");
document.write("canVote is a " + typeof (canVote) + "</br>");
document.write("anything is a " + typeof (anything) + "</br>");
var strToNum = parseInt("5");
var numToStr = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "</br>");
var PI = 3.14159;
document.writeln("PI = " + PI + "</br>");
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.writeln(superman.realName + " is " + superman.superName + "</br>");
/* Arrays */
var employees = ["Bob", "Sally", "Sam"];
document.write(employees.toString() + "</br>");
var superHeroes = [];
superHeroes.push({
    realName: "Bruce Wayne",
    superName: "Batman"
});
document.write(superHeroes[0].superName + " is " + superHeroes[0].realName + "</br>");
/* Math */
var randNum = 1;
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
var sampLet = 123;
if (true) {
    var sampLet_1 = 456; // Only exists within the scope between {}.
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
for (var val in randArray) {
    document.write("randArray[" + val + "] = " + randArray[val] + "</br>");
}
/**
 * In case of a for loop the iteration parameter
 * has to be defined beforehand.
 */
document.write("Writing the values of the array randArray using a for loop.</br>");
// let i: number = 0;
for (var i = 0; i < randArray.length; i++) {
    document.write("randArray[" + i + "] = " + randArray[i] + "</br>");
}
var strArray = randArray.map(String);
document.write("Writing the values of the strArray. <br />");
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
/* Functions */
var getSum = function (number1, number2) {
    return number1 + number2;
};
var theSum1 = getSum(2, 5);
document.write("2 + 5 = " + theSum1 + "</br>");
/**
 * The use of default values and varargs in functions.
 * Also an example of the use of 'typeof'and 'undefined' versus null.
 */
var getDiff = function (number1, number2, number3) {
    if (number2 === void 0) { number2 = 2; }
    if (typeof (number3) != 'undefined') {
        return number1 - number2 - number3;
    }
    else {
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
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0); // '0'is the default value.
    document.write("sum = " + sum + "</br>");
};
sumAll(1, 2, 3, 4, 5);
/*  Arrow / Lambda functions */
var AddOne = function (x) { return x + 1; };
document.write("1 + 1 = " + AddOne(1) + "</br>");
/* Classes. Java-like setup */
var Animal = /** @class */ (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "</br>");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    Animal.numOfAnimals = 0;
    return Animal;
}());
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100; // Here the set function is called.
document.write("Spot's weight is " + spot.weight + "</br>");
document.write("# of animals is " + Animal.howManyAnimals() + "</br>");
/* Inheritance */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        Dog.numOfDogs++;
        return _this;
    }
    Dog.howManyDogs = function () {
        return Dog.numOfDogs;
    };
    Dog.numOfDogs = 0;
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
document.write("After the declaration of Grover: <br />");
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
document.write("# of Dogs being Animals : " + Dog.howManyAnimals() + "<br />");
document.write("# of Dogs : " + Dog.howManyDogs() + "<br />");
document.write("Is a Dog an Animal: " + (grover instanceof Animal) + "<br />");
// Checking whether a field exists.
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
// A class must implement all methods defined in an interface, like in Java.
var Car = /** @class */ (function () {
    // In Typescript only one constructor is possible.
    // Therefore make the parameters optional in order to allow for multiple situations.
    function Car(wheels) {
        this._wheels = 0;
        this._wheels = wheels;
    }
    Object.defineProperty(Car.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        set: function (wheels) {
            this._wheels = wheels;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.drive = function () {
        document.write("The car drives with " + this.wheels + "</br>");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    // In Typescript only one constructor is possible.
    // Therefore make the parameters optional in order to allow for multiple situations.
    function Bicycle(wheels) {
        this._wheels = 0;
        this._wheels = wheels;
    }
    Object.defineProperty(Bicycle.prototype, "wheels", {
        get: function () {
            return this._wheels;
        },
        set: function (wheels) {
            this._wheels = wheels;
        },
        enumerable: true,
        configurable: true
    });
    Bicycle.prototype.drive = function () {
        document.write("The bicycle drives with " + this.wheels + "</br>");
    };
    return Bicycle;
}());
var car = new Car(4);
var bicycle = new Bicycle(2);
car.drive();
bicycle.drive();
/* Gneric functions */
function GetType(value) {
    return typeof (value);
}
// As noted in the beginning it is not compulsory to declare a parameter with  specific type. In that case the type will be 'any'.
var aStr = "A String";
var aNum = 0;
document.write("Type of aStr: " + GetType(aStr) + "</br>");
document.write("Type aNum: " + GetType(aNum) + "</br>");
/**
 * The real use of generic functions is that this construction allows the use of any class instance that has implemented a specific interface.
 */
function getWheels(vehicle) {
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
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
// ---- Number ----
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return (x + y); };
document.write("5 + 4 = " + aNumber.add(5, 4) + "</br>");
// ---- String ----
var aStrNum = new GenericNumber();
aStrNum.add = function (x, y) {
    return String(Number(x) + Number(y));
};
document.write("5 + 6 = " + aStrNum.add("5", "6") + "</br>");
/* Destructoriing */
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write("x + y + z = " + x + y + z + "</br>");
// Now the values of the parameters are switched.
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write("Switch: x + y + z = " + x + y + z + "</br>");
/* Template String */
var multStr = "I go on for \n\nmany lines </br>";
document.write(multStr);
document.write("<b>" + multStr + "</b></br>");
/**
 * The Spread operator:
 * Allows to separate values in an array into attributes in a function.
 */
function theSum(x, y, z) {
    document.write("Sum: " + (x + y + z) + "</br>");
}
var args = [4, 5, 6];
/**
 * Apparently currently the spread operator is not supported.
 * Though this can be executed outside of Visual Studio Code.
 *
 * See:
 * https://github.com/Microsoft/TypeScript/issues/14981
 */
//  theSum(...args: number[]):void;
/* Enum types; the value  normally starts at 0. */
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Angry;
document.write("myFeeling: " + myFeeling + "</br>");
var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHN0dXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdHN0dXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtDRTtBQUVGOzs7OztFQUtFO0FBQ0YsSUFBSSxNQUFNLEdBQVcsS0FBSyxDQUFDO0FBQzNCLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztBQUN2QixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUM7QUFDNUIsSUFBSSxRQUFRLEdBQVEsS0FBSyxDQUFDO0FBRTFCLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDYjs7Ozs7O0dBTUc7QUFDSCx5R0FBeUc7QUFDekcsSUFBSSxTQUFTLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFFLENBQUM7QUFDakUsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBRTdDLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLE9BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUMxRCxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDeEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFFBQVEsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsT0FBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBRTlELElBQUksUUFBUSxHQUFXLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7QUFDekIsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxPQUFNLENBQUMsUUFBUSxD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QUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBRXJELGlEQUFpRDtBQUNqRCxjQUFxQixFQUFwQixTQUFDLEVBQUUsU0FBQyxFQUFFLFNBQUMsQ0FBYztBQUN0QixRQUFRLENBQUMsS0FBSyxDQUFDLHNCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBRTdELHFCQUFxQjtBQUNyQixJQUFJLE9BQU8sR0FBRyxrQ0FFRyxDQUFDO0FBQ2xCLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEIsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFNLE9BQU8sY0FBVyxDQUFDLENBQUM7QUFFekM7OztHQUdHO0FBRUYsZ0JBQWdCLENBQVEsRUFBRSxDQUFRLEVBQUUsQ0FBUTtJQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVyQjs7Ozs7O0dBTUc7QUFDSixtQ0FBbUM7QUFFbEMsa0RBQWtEO0FBRWxELElBQUssT0FJSjtBQUpELFdBQUssT0FBTztJQUNSLHVDQUFRLENBQUE7SUFDUixtQ0FBRyxDQUFBO0lBQ0gsdUNBQUssQ0FBQTtBQUNULENBQUMsRUFKSSxPQUFPLEtBQVAsT0FBTyxRQUlYO0FBRUQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUM5QixRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcIlVzZSBzdHJpY3RcIjtcclxuLypcclxuRGVyZWsgQmFuYXM6IFR5cGVTY3JpcHQgVHV0b3JpYWxcclxuLSBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PS1QUl9YcVc5SkpVJnQ9MXNcclxuXHJcbkNvZGUgJiBUcmFuc2NyaXB0IDogaHR0cHM6Ly9nb28uZ2wvR0R1ek1jXHJcbkJlc3QgVHlwZVNjcmlwdCBCb29rIDogaHR0cDovL2Ftem4udG8vMmQ2WmptTVxyXG5TdXBwb3J0IG1lIG9uIFBhdHJlb24gOiBodHRwczovL3d3dy5wYXRyZW9uLmNvbS9kZXJla2JhbmFzXHJcblxyXG4wMDozMCBJbnN0YWxsXHJcbjAzOjA3IERhdGEgVHlwZXNcclxuMDQ6NTMgV3JpdGluZyB0byBCcm93c2VyXHJcbjA3OjQ3IENvbnZlcnNpb25cclxuMDk6MTYgSW50ZXJmYWNlcyBQdCAxXHJcbjEwOjQzIEFycmF5c1xyXG4xMzoxMCBNYXRoXHJcbjE2OjI4IExldFxyXG4xODozMSBMb29waW5nXHJcbjIwOjEwIEZ1bmN0aW9uc1xyXG4yNjozNiBDbGFzc2VzXHJcbjMxOjEzIEdldHRlcnMgJiBTZXR0ZXJzXHJcbjMzOjQ0IEluaGVyaXRhbmNlXHJcbjM2OjEwIEludGVyZmFjZXMgUHQgMlxyXG4zOTowOCBHZW5lcmljIEZ1bmN0aW9uc1xyXG40MTo1MyBHZW5lcmljIENsYXNzZXNcclxuNDU6MTAgRGVzdHJ1Y3RvcmluZ1xyXG40Njo0OSBUZW1wbGF0ZSBTdHJpbmdzXHJcbjQ3OjM3IFNwcmVhZCBPcGVyYXRvclxyXG5cclxuSW4gdGhpcyB0dXRvcmlhbCB3ZSdsbCBleHBsb3JlIGV2ZXJ5dGhpbmcgeW91J2QgbGVhcm4gaW4gYSBzdGFuZGFyZCAyMDAgcGFnZSBib29rIG9uIFR5cGVTY3JpcHQuIEknbGwgY292ZXIgaW5zdGFsbGF0aW9uLCBkYXRhIHR5cGVzLCBjaGFuZ2luZyB0aGUgYnJvd3NlciwgYXJyYXlzLCBtYXRoLCBsb29waW5nLCBmdW5jdGlvbnMsIGNsYXNzZXMsIGludGVyZmFjZXMsIGluaGVyaXRhbmNlLCBnZW5lcmljIGZ1bmN0aW9ucywgZ2VuZXJpYyBjbGFzc2VzLCBkZXN0cnVjdG9yaW5nLCB0ZW1wbGF0ZSBzdHJpbmdzLCBzcHJlYWQgb3BlcmF0b3IsIGFuZCBtYW55IG90aGVyIHRvcGljcy5cclxuXHJcbjIwMTgtMDMtMTU6IGRvIG5vdCBydW4gdGhpcyB2aWEgdGhlIGNvbW1hbmRsaW5lIChub2RlIC4vbGliL3RzdHV0LmpzKS5cclxuVGhpcyB0eXBlc2NyaXB0IC8gamF2YXNjcmlwdCBjb250YWlucyBodG1sIHJlbGF0ZWQgY29kZVxyXG50aGF0IG9ubHkgZXhlY3V0ZXMgY29ycmVjdGx5IGluIGEgYnJvd3Nlci5cclxuXHJcbiovXHJcblxyXG4vKlxyXG5Zb3UgY2FuIGp1c3QgYWRkIGEgdmFsdWUgdG8gYSBwYXJhbWV0ZXIgYW5kIGxhdGVyIGFkZCBhIHZhbHVlIG9mIGEgZGlmZmVyZW50IHR5cGUsIGFzIGFsbHdheXMgaW4gSmF2YVNjcmlwdC5cclxuSG93ZXZlciBUeXBlU2NyaXB0IG9mZmVycyB0aGUgcG9zc2liaWxpdHkgdG8gaW5kaWNhdGUgdGhlIHR5cGUgb2YgdGhlIHBhcmFtZXRlci5cclxuTGF0ZXIgd2UnbGwgc2VlIHRoYXQgYXBhcnQgZnJvbSBwcmltaXRpdmUgdHlwZXMgYWxzbyBkZWZpbmVkIHR5cGVzIGFyZSBwb3NzaWJsZS5cclxuXHJcbiovXHJcbnZhciBteU5hbWU6IHN0cmluZyA9IFwiUm9iXCI7XHJcbnZhciBteUFnZTogbnVtYmVyID0gNTY7XHJcbnZhciBjYW5Wb3RlOiBib29sZWFuID0gdHJ1ZTtcclxudmFyIGFueXRoaW5nOiBhbnkgPSBcImRvZ1wiO1xyXG5cclxuYW55dGhpbmcgPSAyO1xyXG4vKipcclxuICogTm90ZTogXHJcbiAqIEJ5IHVzaW5nICchJyBJIGluZGljYXRlIHRoYXQgdGhpcyB3aWxsIG5vdCBiZSBhIG51bGwgcmVmZXJlbmNlLlxyXG4gKiBUaGlzIGlzIGEgc29sdXRpb24gdG86ICBlcnJvciBUUzI1MzE6IE9iamVjdCBpcyBwb3NzaWJseSAnbnVsbCcuXHJcbiAqIFxyXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MDY0MDY2My9zdHJpY3RudWxsY2hlY2tzLWFuZC1nZXRlbGVtZW50YnlpZC80MDY0MDg1NCM0MDY0MDg1NFxyXG4gKi9cclxuLy8gdmFyIG15RWxlbWVudDogc3RyaW5nIHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHNTdHVmZlwiKSEuaW5uZXJIVE1MID0gXCJNeSBOYW1lIGlzIFwiICsgbXlOYW1lO1xyXG52YXIgbXlFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHNTdHVmZlwiKSE7XHJcbm15RWxlbWVudC5pbm5lckhUTUwgPSBcIk15IE5hbWUgaXMgXCIgKyBteU5hbWU7XHJcblxyXG5kb2N1bWVudC53cml0ZShcIm15TmFtZSBpcyBhIFwiICsgdHlwZW9mKG15TmFtZSkgKyBcIjwvYnI+XCIpO1xyXG5kb2N1bWVudC53cml0ZShcIm15QWdlIGlzIGEgXCIgKyB0eXBlb2YobXlBZ2UpICsgXCI8L2JyPlwiKTtcclxuZG9jdW1lbnQud3JpdGUoXCJjYW5Wb3RlIGlzIGEgXCIgKyB0eXBlb2YoY2FuVm90ZSkgKyBcIjwvYnI+XCIpO1xyXG5kb2N1bWVudC53cml0ZShcImFueXRoaW5nIGlzIGEgXCIgKyB0eXBlb2YoYW55dGhpbmcpICsgXCI8L2JyPlwiKTtcclxuXHJcbnZhciBzdHJUb051bTogbnVtYmVyID0gcGFyc2VJbnQoXCI1XCIpO1xyXG52YXIgbnVtVG9TdHI6IG51bWJlciA9IDU7XHJcbmRvY3VtZW50LndyaXRlKFwibnVtVG9TdHIgaXMgYSBcIiArIHR5cGVvZihudW1Ub1N0ci50b1N0cmluZygpKSArIFwiPC9icj5cIik7XHJcblxyXG5jb25zdCBQSSA9IDMuMTQxNTk7XHJcbmRvY3VtZW50LndyaXRlbG4oXCJQSSA9IFwiICsgUEkgKyBcIjwvYnI+XCIpO1xyXG5cclxuLyogSW50ZXJmYWNlcyAqL1xyXG5cclxuaW50ZXJmYWNlIFN1cGVySGVybyB7XHJcbiAgICByZWFsTmFtZTogU3RyaW5nLFxyXG4gICAgc3VwZXJOYW1lOiBzdHJpbmdcclxufVxyXG5cclxudmFyIHN1cGVybWFuOiBTdXBlckhlcm8gPSB7XHJcbiAgICByZWFsTmFtZTogXCJDbGFyayBLZW50XCIsXHJcbiAgICBzdXBlck5hbWU6IFwiU3VwZXJtYW5cIlxyXG59XHJcblxyXG5kb2N1bWVudC53cml0ZWxuKHN1cGVybWFuLnJlYWxOYW1lICsgXCIgaXMgXCIgKyBzdXBlcm1hbi5zdXBlck5hbWUgKyBcIjwvYnI+XCIpO1xyXG5cclxuLyogQXJyYXlzICovXHJcbnZhciBlbXBsb3llZXM6IHN0cmluZ1tdID0gW1wiQm9iXCIsIFwiU2FsbHlcIiwgXCJTYW1cIl07XHJcbmRvY3VtZW50LndyaXRlKGVtcGxveWVlcy50b1N0cmluZygpICsgXCI8L2JyPlwiKTtcclxuXHJcbnZhciBzdXBlckhlcm9lczogU3VwZXJIZXJvW10gPSBbXTtcclxuc3VwZXJIZXJvZXMucHVzaCgge1xyXG4gICAgcmVhbE5hbWU6IFwiQnJ1Y2UgV2F5bmVcIixcclxuICAgIHN1cGVyTmFtZTogXCJCYXRtYW5cIlxyXG59KTtcclxuZG9jdW1lbnQud3JpdGUoc3VwZXJIZXJvZXNbMF0uc3VwZXJOYW1lICsgXCIgaXMgXCIgKyBzdXBlckhlcm9lc1swXS5yZWFsTmFtZSArIFwiPC9icj5cIik7XHJcblxyXG4vKiBNYXRoICovXHJcbnZhciByYW5kTnVtOiBudW1iZXIgPSAxO1xyXG5kb2N1bWVudC53cml0ZShcInJhbmROdW0rKyA9IFwiICsgcmFuZE51bSsrICsgXCI8L2JyPlwiKTtcclxuZG9jdW1lbnQud3JpdGUoXCIrK3JhbmROdW0gPSBcIiArICsrcmFuZE51bSArIFwiPC9icj5cIik7XHJcbmRvY3VtZW50LndyaXRlKFwicmFuZE51bS0tID0gXCIgKyByYW5kTnVtICsgXCI8L2JyPlwiKTtcclxuZG9jdW1lbnQud3JpdGUoXCItLXJhbmROdW0gPSBcIiArIC0tcmFuZE51bSArIFwiPC9icj5cIik7XHJcblxyXG4vKiBUaGUgbGV0IG9wZXJhdG9yIHZlcnN1cyB0aGUgdmFyIG9wZXJhdG9yLiBcclxuXHJcbkluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZTpcclxuVGhlIGxldCBzdGF0ZW1lbnQgd2lsbCBkZWZpbmUgYSBwYXJhbWV0ZXIgdGhhdCB3aWxsIG5vdCBoYXZlIGl0J3MgdmFsdWVcclxuY2hhbmdlZCB3aXRoaW4gYSBjb2RlIGJsb2NrLlxyXG5XaGVuIHVzaW5nIHRoZSB2YXIgc3RhdGVtZW50IHRoaXMgd2lsbCBiZSB0aGUgY2FzZS5cclxuKFRvIGJlIGhvbmVzdDogd2l0aGluIHRoZSBzYW1lIGNvZGUgYmxvY2s6IGRlcGVuZHMgb24gd2hhdCB5b3UgYXJlIHVzZWQgdG8uKVxyXG4qL1xyXG5cclxubGV0IHNhbXBMZXQgPSAxMjM7XHJcbmlmICh0cnVlKSB7XHJcbiAgICBsZXQgc2FtcExldCA9IDQ1NjsgIC8vIE9ubHkgZXhpc3RzIHdpdGhpbiB0aGUgc2NvcGUgYmV0d2VlbiB7fS5cclxufVxyXG5kb2N1bWVudC53cml0ZShcInNhbXBMZXQgPSBcIiArIHNhbXBMZXQgKyBcIjwvYnI+XCIpO1xyXG5cclxudmFyIHNhbXBWYXIgPSAxMjM7XHJcbmlmICh0cnVlKSB7XHJcbiAgICB2YXIgc2FtcFZhciA9IDQ1NjsgLy8gV2lsbCBjaGFuZ2UgdGhlIHZhbHVlIG9mIGEgdmFyaWFibGUgb3V0c2lkZSB0aGUgc2NvcGUuXHJcbn1cclxuZG9jdW1lbnQud3JpdGUoXCJzYW1wVmFyID0gXCIgKyBzYW1wVmFyICsgXCI8L2JyPlwiKTtcclxuXHJcbi8qIExvb3BzICovXHJcbnZhciByYW5kQXJyYXkgPSBbNSwgNiwgNywgOF07XHJcbmRvY3VtZW50LndyaXRlKFwiV3JpdGluZyB0aGUgdmFsdWVzIG9mIHRoZSBhcnJheSByYW5kQXJyYXkuPC9icj5cIik7XHJcbmZvcih2YXIgdmFsIGluIHJhbmRBcnJheSkge1xyXG4gICAgZG9jdW1lbnQud3JpdGUoXCJyYW5kQXJyYXlbXCIgKyB2YWwgKyBcIl0gPSBcIiArIHJhbmRBcnJheVt2YWxdICsgXCI8L2JyPlwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluIGNhc2Ugb2YgYSBmb3IgbG9vcCB0aGUgaXRlcmF0aW9uIHBhcmFtZXRlciBcclxuICogaGFzIHRvIGJlIGRlZmluZWQgYmVmb3JlaGFuZC5cclxuICovXHJcbmRvY3VtZW50LndyaXRlKFwiV3JpdGluZyB0aGUgdmFsdWVzIG9mIHRoZSBhcnJheSByYW5kQXJyYXkgdXNpbmcgYSBmb3IgbG9vcC48L2JyPlwiKTtcclxuLy8gbGV0IGk6IG51bWJlciA9IDA7XHJcbmZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJhbmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgZG9jdW1lbnQud3JpdGUoXCJyYW5kQXJyYXlbXCIgKyBpICsgXCJdID0gXCIgKyByYW5kQXJyYXlbaV0gKyBcIjwvYnI+XCIpO1xyXG59XHJcblxyXG52YXIgc3RyQXJyYXkgPSByYW5kQXJyYXkubWFwKFN0cmluZyk7XHJcblxyXG5kb2N1bWVudC53cml0ZShcIldyaXRpbmcgdGhlIHZhbHVlcyBvZiB0aGUgc3RyQXJyYXkuIDxiciAvPlwiKTtcclxuZm9yICh2YXIgdmFsIG9mIHN0ckFycmF5KSB7XHJcblx0ZG9jdW1lbnQud3JpdGUodmFsICsgXCI8YnIgLz5cIik7XHRcclxufVxyXG5cclxuLyogRnVuY3Rpb25zICovXHJcblxyXG52YXIgZ2V0U3VtID0gZnVuY3Rpb24oIG51bWJlcjE6IG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAsIG51bWJlcjI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyMSArIG51bWJlcjI7XHJcbiAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG52YXIgdGhlU3VtMTogbnVtYmVyID0gZ2V0U3VtKDIsIDUpO1xyXG5kb2N1bWVudC53cml0ZShcIjIgKyA1ID0gXCIgKyB0aGVTdW0xICsgXCI8L2JyPlwiKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdXNlIG9mIGRlZmF1bHQgdmFsdWVzIGFuZCB2YXJhcmdzIGluIGZ1bmN0aW9ucy5cclxuICogQWxzbyBhbiBleGFtcGxlIG9mIHRoZSB1c2Ugb2YgJ3R5cGVvZidhbmQgJ3VuZGVmaW5lZCcgdmVyc3VzIG51bGwuXHJcbiAqL1xyXG52YXIgZ2V0RGlmZiA9IGZ1bmN0aW9uKCBudW1iZXIxOiBudW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICwgbnVtYmVyMjogbnVtYmVyID0gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgLCBudW1iZXIzPzogbnVtYmVyKSA6IG51bWJlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YobnVtYmVyMykgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIxIC0gbnVtYmVyMiAtIG51bWJlcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyMSAtIG51bWJlcjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuZG9jdW1lbnQud3JpdGUoXCI1IC0gMiA9IFwiICsgZ2V0RGlmZig1KSArIFwiPC9icj5cIik7XHJcbmRvY3VtZW50LndyaXRlKFwiNSAtIDIgLSAzID0gXCIgKyBnZXREaWZmKDUsIDIsIDMpICsgXCI8L2JyPlwiKTtcclxuXHJcbi8qIFxyXG5cdEluIHRoZSBmb2xsb3dpbmcgY29uc3RydWN0aW9uIHRoZSBpbnB1dCBudW1iZXJzIChjYW4gYmUgYSB2YXJpYWJsZSBcclxuXHRudW1iZXIpIGFyZSBhZGRlZCB0byBhcnJheS5cclxuXHRJbiBUeXBlU2NyaXB0IHRoZXNlIHBhcmFtZXRlcnMgYXJlIGNhbGxlZCBSZXN0IFBhcmFtZXRlcnMuXHJcblx0KGluIEphdmEgdmFyaWFibGUgYXJndW1lbnRzKS5cclxuXHRudW1zLnJlZHVjZTogbGlrZSB0aGUgSmF2YSBMYW1iZGEgZnVuY3Rpb25zLiBcclxuaHR0cHM6Ly93d3cudHV0b3JpYWxzcG9pbnQuY29tL3R5cGVzY3JpcHQvdHlwZXNjcmlwdF9hcnJheV9yZWR1Y2UuaHRtXHJcblx0cmVkdWNlKCkgbWV0aG9kIGFwcGxpZXMgYSBmdW5jdGlvbiBzaW11bHRhbmVvdXNseSBhZ2FpbnN0IHR3byB2YWx1ZXMgb2YgdGhlIGFycmF5IChmcm9tIGxlZnQtdG8tcmlnaHQpIGFzIHRvIHJlZHVjZSBpdCB0byBhIHNpbmdsZSB2YWx1ZS5cclxuXHJcblx0QWxzbzogaWYgbm90aGluZyBpcyByZXR1cm5lZCB0aGlzIGlzIGluZGljYXRlZCBieSByZXR1cm4gJ3ZvaWQnLlxyXG5cclxuKi9cclxuXHJcbnZhciBzdW1BbGwgPSBmdW5jdGlvbiguLi5udW1zOiBudW1iZXJbXSkgOiB2b2lkIHtcclxuICAgIHZhciBzdW06IG51bWJlciA9IG51bXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7IC8vICcwJ2lzIHRoZSBkZWZhdWx0IHZhbHVlLlxyXG4gICAgZG9jdW1lbnQud3JpdGUoXCJzdW0gPSBcIiArIHN1bSArIFwiPC9icj5cIik7XHJcbn1cclxuXHJcbnN1bUFsbCgxLCAyLCAzLCA0LCA1KTtcclxuXHJcbi8qICBBcnJvdyAvIExhbWJkYSBmdW5jdGlvbnMgKi9cclxuXHJcbnZhciBBZGRPbmUgPSAoeDpudW1iZXIpID0+IHggKyAxO1xyXG5kb2N1bWVudC53cml0ZShcIjEgKyAxID0gXCIgKyBBZGRPbmUoMSkgKyBcIjwvYnI+XCIpO1xyXG5cclxuLyogQ2xhc3Nlcy4gSmF2YS1saWtlIHNldHVwICovXHJcblxyXG5jbGFzcyBBbmltYWwge1xyXG5cclxuICAgIHByaXZhdGUgX3dlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGZhdkZvb2Q6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgbnVtT2ZBbmltYWxzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAsIHByaXZhdGUgb3duZXI6IHN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgQW5pbWFsLm51bU9mQW5pbWFscysrO1xyXG4gICAgfVxyXG5cclxuICAgIG93bmVySW5mbygpIHtcclxuICAgICAgICBkb2N1bWVudC53cml0ZSggdGhpcy5uYW1lICsgXCIgaXMgb3duZWQgYnkgXCIgKyB0aGlzLm93bmVyICsgXCI8L2JyPlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaG93TWFueUFuaW1hbHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gQW5pbWFsLm51bU9mQW5pbWFscztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2VpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgd2VpZ2h0KHdlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxudmFyIHNwb3QgPSBuZXcgQW5pbWFsKFwiU3BvdFwiLCBcIkRvdWdcIik7XHJcbnNwb3Qub3duZXJJbmZvKCk7XHJcbnNwb3Qud2VpZ2h0ID0gMTAwOyAvLyBIZXJlIHRoZSBzZXQgZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cclxuZG9jdW1lbnQud3JpdGUoXCJTcG90J3Mgd2VpZ2h0IGlzIFwiICsgc3BvdC53ZWlnaHQgKyBcIjwvYnI+XCIpO1xyXG5kb2N1bWVudC53cml0ZShcIiMgb2YgYW5pbWFscyBpcyBcIiArIEFuaW1hbC5ob3dNYW55QW5pbWFscygpICsgXCI8L2JyPlwiKTtcclxuXHJcbi8qIEluaGVyaXRhbmNlICovXHJcblxyXG5jbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xyXG5cclxuICAgIHN0YXRpYyBudW1PZkRvZ3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvd25lcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgb3duZXIpO1xyXG4gICAgICAgIERvZy5udW1PZkFuaW1hbHMrKztcclxuICAgICAgICBEb2cubnVtT2ZEb2dzKys7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGhvd01hbnlEb2dzKCkge1xyXG4gICAgICAgIHJldHVybiBEb2cubnVtT2ZEb2dzO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgZ3JvdmVyID0gbmV3IERvZyhcIkdyb3ZlclwiLCBcIkppbW15XCIpO1xyXG5kb2N1bWVudC53cml0ZShcIkFmdGVyIHRoZSBkZWNsYXJhdGlvbiBvZiBHcm92ZXI6IDxiciAvPlwiKTtcclxuZG9jdW1lbnQud3JpdGUoXCIjIG9mIEFuaW1hbHMgOiBcIiArIEFuaW1hbC5ob3dNYW55QW5pbWFscygpICsgXCI8YnIgLz5cIik7XHJcbmRvY3VtZW50LndyaXRlKFwiIyBvZiBEb2dzIGJlaW5nIEFuaW1hbHMgOiBcIiArIERvZy5ob3dNYW55QW5pbWFscygpICsgXCI8YnIgLz5cIik7XHJcbmRvY3VtZW50LndyaXRlKFwiIyBvZiBEb2dzIDogXCIgKyBEb2cuaG93TWFueURvZ3MoKSArIFwiPGJyIC8+XCIpO1xyXG5kb2N1bWVudC53cml0ZShcIklzIGEgRG9nIGFuIEFuaW1hbDogXCIgKyAoIGdyb3ZlciBpbnN0YW5jZW9mIEFuaW1hbCkgK1wiPGJyIC8+XCIpO1xyXG4vLyBDaGVja2luZyB3aGV0aGVyIGEgZmllbGQgZXhpc3RzLlxyXG5kb2N1bWVudC53cml0ZShcIkRvZXMgZ3JvdmVyIGhhdmUgYSBuYW1lIDogXCIgKyAoJ25hbWUnIGluIGdyb3ZlcikgKyBcIjxiciAvPlwiKTtcclxuXHJcbi8qIEluaGVyaXRhbmNlIFBhcnQgMi4gKi9cclxuXHJcbmludGVyZmFjZSBWZWhpY2xlIHtcclxuICAgIGRyaXZlKCk6IGFueTtcclxufVxyXG5cclxuLy8gQSBjbGFzcyBtdXN0IGltcGxlbWVudCBhbGwgbWV0aG9kcyBkZWZpbmVkIGluIGFuIGludGVyZmFjZSwgbGlrZSBpbiBKYXZhLlxyXG5jbGFzcyBDYXIgaW1wbGVtZW50cyBWZWhpY2xlIHtcclxuXHJcbiAgICBwcml2YXRlIF93aGVlbHM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gSW4gVHlwZXNjcmlwdCBvbmx5IG9uZSBjb25zdHJ1Y3RvciBpcyBwb3NzaWJsZS5cclxuICAgIC8vIFRoZXJlZm9yZSBtYWtlIHRoZSBwYXJhbWV0ZXJzIG9wdGlvbmFsIGluIG9yZGVyIHRvIGFsbG93IGZvciBtdWx0aXBsZSBzaXR1YXRpb25zLlxyXG4gICAgY29uc3RydWN0b3Iod2hlZWxzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aGVlbHMgPSB3aGVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdoZWVscygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aGVlbHM7XHJcbiAgICB9XHJcbiAgICBzZXQgd2hlZWxzKHdoZWVsczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2hlZWxzID0gd2hlZWxzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyaXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LndyaXRlKFwiVGhlIGNhciBkcml2ZXMgd2l0aCBcIiArIHRoaXMud2hlZWxzICsgXCI8L2JyPlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQmljeWNsZSBpbXBsZW1lbnRzIFZlaGljbGUge1xyXG5cclxuICAgIHByaXZhdGUgX3doZWVsczogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBJbiBUeXBlc2NyaXB0IG9ubHkgb25lIGNvbnN0cnVjdG9yIGlzIHBvc3NpYmxlLlxyXG4gICAgLy8gVGhlcmVmb3JlIG1ha2UgdGhlIHBhcmFtZXRlcnMgb3B0aW9uYWwgaW4gb3JkZXIgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHNpdHVhdGlvbnMuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aGVlbHM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3doZWVscyA9IHdoZWVscztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2hlZWxzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3doZWVscztcclxuICAgIH1cclxuICAgIHNldCB3aGVlbHMod2hlZWxzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aGVlbHMgPSB3aGVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJpdmUoKTogdm9pZCB7XHJcbiAgICAgICAgZG9jdW1lbnQud3JpdGUoXCJUaGUgYmljeWNsZSBkcml2ZXMgd2l0aCBcIiArIHRoaXMud2hlZWxzICsgXCI8L2JyPlwiKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNhciA9IG5ldyBDYXIoNCk7XHJcbnZhciBiaWN5Y2xlID0gbmV3IEJpY3ljbGUoMik7XHJcbmNhci5kcml2ZSgpO1xyXG5iaWN5Y2xlLmRyaXZlKCk7XHJcblxyXG4vKiBHbmVyaWMgZnVuY3Rpb25zICovXHJcblxyXG5mdW5jdGlvbiBHZXRUeXBlPFQ+KHZhbHVlOiBUKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0eXBlb2YodmFsdWUpO1xyXG59XHJcblxyXG4vLyBBcyBub3RlZCBpbiB0aGUgYmVnaW5uaW5nIGl0IGlzIG5vdCBjb21wdWxzb3J5IHRvIGRlY2xhcmUgYSBwYXJhbWV0ZXIgd2l0aCAgc3BlY2lmaWMgdHlwZS4gSW4gdGhhdCBjYXNlIHRoZSB0eXBlIHdpbGwgYmUgJ2FueScuXHJcbnZhciBhU3RyID0gXCJBIFN0cmluZ1wiO1xyXG52YXIgYU51bTogbnVtYmVyID0gMDtcclxuXHJcbmRvY3VtZW50LndyaXRlKFwiVHlwZSBvZiBhU3RyOiBcIiArIEdldFR5cGUoYVN0cikgKyBcIjwvYnI+XCIpO1xyXG5kb2N1bWVudC53cml0ZShcIlR5cGUgYU51bTogXCIgKyBHZXRUeXBlKGFOdW0pICsgXCI8L2JyPlwiKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgcmVhbCB1c2Ugb2YgZ2VuZXJpYyBmdW5jdGlvbnMgaXMgdGhhdCB0aGlzIGNvbnN0cnVjdGlvbiBhbGxvd3MgdGhlIHVzZSBvZiBhbnkgY2xhc3MgaW5zdGFuY2UgdGhhdCBoYXMgaW1wbGVtZW50ZWQgYSBzcGVjaWZpYyBpbnRlcmZhY2UuXHJcbiAqL1xyXG5cclxuIGZ1bmN0aW9uIGdldFdoZWVsczxUIGV4dGVuZHMgVmVoaWNsZT4odmVoaWNsZTpUKSB7XHJcbiAgICAgcmV0dXJuIHZlaGljbGUuZHJpdmUoKTtcclxuIH1cclxuIGdldFdoZWVscyhjYXIpO1xyXG4gZ2V0V2hlZWxzKGJpY3ljbGUpO1xyXG5cclxuIC8qIEdlbmVyaWMgQ2xhc3NlcyAqL1xyXG5cclxuIC8qKlxyXG4gICogSW4gdGhlIGZvbGxvd2luZyBpcyBkZWZpbmVkOlxyXG4gICogLSBBIGNsYXNzIGlzIHVzaW5nIGEgc3BlY2lmaWMgZGF0YSB0eXBlIFQuXHJcbiAgKiAtIEFuIGFkZCBtZXRob2Q6XHJcbiAgKiAgICAgLSBJbnB1dDogdHdvIHBhcmFtZXRlcnMgb2YgdHlwZSBULlxyXG4gICogICAgIC0gUmV0dXJuOiBhIHBhcmFtZXRlciBvZiB0eXBlIFQuXHJcbiAgKi9cclxuIGNsYXNzIEdlbmVyaWNOdW1iZXI8VD4ge1xyXG4gICAgIGFkZDogKHZhbHVlMTogVCwgdmFsdWUyOiBUKSA9PiBUO1xyXG4gfVxyXG5cclxuIC8vIC0tLS0gTnVtYmVyIC0tLS1cclxuIHZhciBhTnVtYmVyID0gbmV3IEdlbmVyaWNOdW1iZXI8bnVtYmVyPigpO1xyXG4gYU51bWJlci5hZGQgPSBmdW5jdGlvbih4LCB5KSB7IHJldHVybiAoeCArIHkpOyB9O1xyXG5cclxuIGRvY3VtZW50LndyaXRlKFwiNSArIDQgPSBcIiArIGFOdW1iZXIuYWRkKDUsIDQpICsgXCI8L2JyPlwiKTtcclxuXHJcbiAvLyAtLS0tIFN0cmluZyAtLS0tXHJcbiB2YXIgYVN0ck51bSA9IG5ldyBHZW5lcmljTnVtYmVyPHN0cmluZz4oKTtcclxuYVN0ck51bS5hZGQgPSBmdW5jdGlvbih4LCB5KSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKE51bWJlcih4KSArIE51bWJlcih5KSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LndyaXRlKFwiNSArIDYgPSBcIiArIGFTdHJOdW0uYWRkKFwiNVwiLCBcIjZcIikgKyBcIjwvYnI+XCIpO1xyXG5cclxuLyogRGVzdHJ1Y3RvcmlpbmcgKi9cclxuXHJcbnZhciByYW5kVmFscyA9IHt4OiAxLCB5OiAyLCB6OiAzfTtcclxudmFyIHt4LCB5LCB6fSA9IHJhbmRWYWxzO1xyXG5cclxuZG9jdW1lbnQud3JpdGUoXCJ4ICsgeSArIHogPSBcIiArIHggKyB5ICsgeiArIFwiPC9icj5cIik7XHJcblxyXG4vLyBOb3cgdGhlIHZhbHVlcyBvZiB0aGUgcGFyYW1ldGVycyBhcmUgc3dpdGNoZWQuXHJcblt4LCB5LCB6XSA9IFt6LCB5LCB4XTtcclxuZG9jdW1lbnQud3JpdGUoXCJTd2l0Y2g6IHggKyB5ICsgeiA9IFwiICsgeCArIHkgKyB6ICsgXCI8L2JyPlwiKTtcclxuXHJcbi8qIFRlbXBsYXRlIFN0cmluZyAqL1xyXG52YXIgbXVsdFN0ciA9IGBJIGdvIG9uIGZvciBcclxuXHJcbm1hbnkgbGluZXMgPC9icj5gO1xyXG5kb2N1bWVudC53cml0ZShtdWx0U3RyKTtcclxuZG9jdW1lbnQud3JpdGUoYDxiPiR7bXVsdFN0cn08L2I+PC9icj5gKTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgU3ByZWFkIG9wZXJhdG9yOlxyXG4gKiBBbGxvd3MgdG8gc2VwYXJhdGUgdmFsdWVzIGluIGFuIGFycmF5IGludG8gYXR0cmlidXRlcyBpbiBhIGZ1bmN0aW9uLlxyXG4gKi9cclxuXHJcbiBmdW5jdGlvbiB0aGVTdW0oeDpudW1iZXIsIHk6bnVtYmVyLCB6Om51bWJlcik6IHZvaWQge1xyXG4gICAgIGRvY3VtZW50LndyaXRlKFwiU3VtOiBcIiArICh4ICsgeSArIHopICsgXCI8L2JyPlwiKTtcclxuIH1cclxuXHJcbiBsZXQgYXJncyA9IFs0LCA1LCA2XTtcclxuXHJcbiAvKipcclxuICAqIEFwcGFyZW50bHkgY3VycmVudGx5IHRoZSBzcHJlYWQgb3BlcmF0b3IgaXMgbm90IHN1cHBvcnRlZC5cclxuICAqIFRob3VnaCB0aGlzIGNhbiBiZSBleGVjdXRlZCBvdXRzaWRlIG9mIFZpc3VhbCBTdHVkaW8gQ29kZS5cclxuICAqIFxyXG4gICogU2VlOlxyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xNDk4MVxyXG4gICovXHJcbi8vICB0aGVTdW0oLi4uYXJnczogbnVtYmVyW10pOnZvaWQ7XHJcblxyXG4gLyogRW51bSB0eXBlczsgdGhlIHZhbHVlICBub3JtYWxseSBzdGFydHMgYXQgMC4gKi9cclxuXHJcbiBlbnVtIEVtb3Rpb24ge1xyXG4gICAgIEhhcHB5ID0xLFxyXG4gICAgIFNhZCxcclxuICAgICBBbmdyeVxyXG4gfVxyXG5cclxuIHZhciBteUZlZWxpbmcgPSBFbW90aW9uLkFuZ3J5O1xyXG4gZG9jdW1lbnQud3JpdGUoXCJteUZlZWxpbmc6IFwiICsgbXlGZWVsaW5nICsgXCI8L2JyPlwiKTtcclxuIl19