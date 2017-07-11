class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");

document.body.innerHTML = greeter.greet();


/* ========================================================================== */


class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);


/* ========================================================================== */


class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}

import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}

declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax


/* ========================================================================== */


class Animal {
    constructor(public name) { }
    move(meters) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}

var sam = new Snake("Sammy the Python")
var tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)


/* ========================================================================== */


interface Drivable {
    // Starts the car's ignition so that it can drive.
    start(): void;
    // Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    drive(distance: number): boolean;
    // Give the distance from the start.
    getPosition(): number;
}
class Car implements Drivable {
    private _isRunning: boolean;
    private _distanceFromStart: number;
    constructor() {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }
    /**
     *   Starts the car's ignition so that it can drive.
     */
    public start() {
        this._isRunning = true;
    }
    /**
     *   Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
     *
     *   @param {number} distance The distance attempting to cover
     *
     *   @returns {boolean} Whether or not the drive was successful
     */
    public drive(distance: number): boolean {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false;
    }
    /**
     *   Gives the distance from starting position
     *
     *   @returns {number} Distance from starting position;
     */
    public getPosition(): number {
        return this._distanceFromStart;
    }
}
// Want to experiment? Try adding a second interface: Flyable. Implement it in a Helicopter class, then write a FlyingCar class that implements both Drivable and Flyable!
