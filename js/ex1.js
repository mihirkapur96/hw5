/* Homework 5
Exercise 1 JavaScript code
*/
console.log ("Mihir's output from Homework 5 Exercise 1");

class Square {
    constructor (side) {
        this.side = side;
    }
    perimeter () {
        return  4 * `${this.side}`;
    }
    area () {
        return 2 ** `${this.side}`;
    }
    diagonal () {
        return `${this.side}` * Math.sqrt (2);
    }
    describe () {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
    }

}
const Squareclass = new Square (2);
const Squareclass1 = new Square (4);
const Squareclass2 = new Square (6);
console.log (Squareclass.describe ());
console.log (Squareclass1.describe ());
console.log (Squareclass2.describe ());
