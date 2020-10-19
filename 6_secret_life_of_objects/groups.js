/*
 * The standard JavaScript environment provides another data structure called
 * Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
 * does not associate other values with those—it just tracks which values are part
 * of the set. A value can be part of a set only once—adding it again doesn’t have
 * any effect.
 *
 * Write a class called Group (since Set is already taken). Like Set, it has add,
 * delete, and has methods. Its constructor creates an empty group, add adds
 * a value to the group (but only if it isn’t already a member), delete removes
 * its argument from the group (if it was a member), and has returns a Boolean
 * value indicating whether its argument is a member of the group.
 *
 * Use the === operator, or something equivalent such as indexOf, to determine
 * whether two values are the same.
 *
 * Give the class a static from method that takes an iterable object as argument
 * and creates a group that contains all the values produced by iterating over it.
 *
 * -------------------------
 *
 * Make the Group class from the previous exercise iterable. Refer to the section
 * about the iterator interface earlier in the chapter if you aren’t clear on the
 * exact form of the interface anymore.
 *
 * If you used an array to represent the group’s members, don’t just return the
 * iterator created by calling the Symbol.iterator method on the array. That
 * would work, but it defeats the purpose of this exercise.
 *
 * It is okay if your iterator behaves strangely when the group is modified during
 * iteration.
 */

class Group extends Array {
    constructor() {
        super();
    }
    has(element) {
        return this.includes(element);
    }
    add(element) {
        if (!this.has(element)) this.push(element);
    }
    remove(element) {
        if (this.has(element)) delete this.splice(this.indexOf(element), 1);
    }
    static from(collection) {
        let group = new Group();

        for (let element of collection) {
            group.add(element);
        }

        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if (this.index === this.group.length) return { value: undefined, done: true };
        let value = { value: this.group[this.index]}
        this.index++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}

let firstGroup = new Group();
for (let i = 0; i < 3; i++) {
    firstGroup.add(i);
}
firstGroup.remove(2);
let collection = [1, 2, 3, 2, 4, 5, 3, 5, 1];
let secondGroup = Group.from(collection);

console.log(firstGroup);
console.log(secondGroup);
for (let element of secondGroup) {
    console.log(element);
}