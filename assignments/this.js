/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - The 'this' keyword will default to the window object, unless there are other rules applied to it OR if you are in 'strict mode' which will cause it to return undefined.
 * 2. Implicit Binding - Implicit binding occurs when dot notation is used to invoke a function - only applies to objects within methods.
 * 3. New Binding - Using the 'new' keyword constructs a new object and 'this' point to it.
 * 4. Explicit Binding - Explicit binding occurs when .call, .apply, or .bind are used on a function.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

console.log('TESTING WINDOW BINDING: ');
console.log(this);



// Principle 2

// code example for Implicit Binding

let person = {
    name: 'Lyndsi',
    age: '29',
    location: 'Florida',
    greet: function() {
        console.log(`Hi, I am ${this.name}, I'm from ${this.location} and I am ${this.age} years old.`)
    }
}

console.log('TESTING IMPLICIT BINDING: ');
person.greet();



// Principle 3

// code example for New Binding

function Cat(meow) {
    this.thing = meow;
}

let myCat = new Cat('The kitty cat goes meow!');

console.log('TESTING NEW BINDING: ');
console.log(myCat.thing);



// Principle 4

// code example for Explicit Binding

function kitties() {
    console.log(this.sound);
}

let oneCat = {
    name: 'Pixel',
    sound: 'LOUD MEOW!!!'
}

let twoCat = {
    name: 'Lucy',
    sound: 'Polite meow.'
}

console.log('TESTING EXPLICIT BINDING: ');
kitties.call(oneCat);
kitties.call(twoCat);