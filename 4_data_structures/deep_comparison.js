/*
 * The == operator compares objects by identity. But sometimes you’d prefer to
 * compare the values of their actual properties.
 *
 * Write a function deepEqual that takes two values and returns true only if they
 * are the same value or are objects with the same properties, where the values
 * of the properties are equal when compared with a recursive call to deepEqual.
 *
 * To find out whether values should be compared directly (use the === operator
 * for that) or have their properties compared, you can use the typeof operator.
 * If it produces "object" for both values, you should do a deep comparison.
 * But you have to take one silly exception into account: because of a historical
 * accident, typeof null also produces "object".
 *
 * The Object.keys function will be useful when you need to go over the properties
 * of objects to compare them.
 */

function deepEqual(firstObject, secondObject) {
    if (Object.keys(firstObject).length !== Object.keys(secondObject).length) return false;
    for (let member of Object.keys(firstObject)) {
        if (firstObject[member] === null) {
            if (null !== secondObject[member]) {
                return false;
            }
        } else if (typeof firstObject[member] !== "object") {
            if (firstObject[member] !== secondObject[member]) {
                return false
            }
        } else {
            if (!deepEqual(firstObject[member], secondObject[member])) return false;
        }
    }
    return true;
}


let sampleObject = {
    a: 1,
    b: 'sample',
    c: { d: true, e: 8},
    f: [1, 2, 3],
    g: 'z'
}

let sampleEqualObject = {
    a: 1,
    b: 'sample',
    c: { d: true, e: 8},
    f: [1, 2, 3],
    g: 'z'
}

let sampleDifferentObject = {
    a: 1,
    b: 'sample',
    c: { d: true, e: 10},
    f: [1, 2, 3],
    g: 'z'
}


console.log(deepEqual(sampleObject, sampleEqualObject));
console.log(deepEqual(sampleObject, sampleDifferentObject));