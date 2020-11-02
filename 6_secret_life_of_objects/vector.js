/*
 * Write a class Vec that represents a vector in two-dimensional space. It takes
 * x and y parameters (numbers), which it should save to properties of the same
 * name.
 *
 * Give the Vec prototype two methods, plus and minus, that take another
 * vector as a parameter and return a new vector that has the sum or difference
 * of the two vectors’ (this and the parameter) x and y values.
 *
 * Add a getter property length to the prototype that computes the length of
 * the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

Vec.prototype.plus = function (vector) {
    return new Vec(this.x + vector.x, this.y + vector.y);
}

Vec.prototype.minus = function (vector) {
    return new Vec(this.x - vector.x, this.y - vector.y);
}

let vector1 = new Vec(2, 2);
let vector2 = new Vec(8, 6);
let vector3 = new Vec(1, 1);

console.log(vector1.plus(vector2).x);
console.log(vector2.minus(vector3).y);
console.log(vector2.length);