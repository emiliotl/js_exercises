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
    if (firstObject && secondObject) {
        const firstObjectProperties = Object.keys(firstObject);
        const secondObjectProperties = Object.keys(secondObject);

        if (firstObjectProperties.length !== secondObjectProperties.length) return false;
        for (let member of firstObjectProperties) {
            const firstObjectMember = firstObject[member];
            const secondObjectMember = secondObject[member];

            if (typeof firstObjectMember === 'object' && typeof secondObjectMember === 'object') {
                if (!deepEqual(firstObjectMember, secondObjectMember)) return false;
            } else if (firstObjectMember !== secondObjectMember) return Number.isNaN(firstObjectMember);
        }
        return true;
    } else if (firstObject !== secondObject) return Number.isNaN(firstObject);
    else return true;
}


let sampleObject = {
    a: null,
    b: 'sample',
    c: { d: true, e: 8, f: undefined},
    g: [1, 2, 3],
    h: NaN,
    i: 0,
}

let sampleEqualObject = {
    a: null,
    b: 'sample',
    c: { d: true, e: 8, f: undefined},
    g: [1, 2, 3],
    h: NaN,
    i: 0
}

let sampleDifferentObject = {
    a: null,
    b: 'sample',
    c: { d: true, e: 10, f: undefined},
    g: [1, 2, 3],
    h: 'z',
    i: 0
}


console.log(deepEqual(sampleObject, sampleEqualObject));
console.log(deepEqual(sampleObject, sampleDifferentObject));