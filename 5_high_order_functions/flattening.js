/*
 * Use the reduce method in combination with the concat method to “flatten”
 * an array of arrays into a single array that has all the elements of the original
 * arrays.
 */

function flatten(nestedArray) {
    return nestedArray.reduce((accumulator, value) => {
        if (Array.isArray(value)) {
            return accumulator.concat(flatten(value));
        } else {
            return accumulator.concat(value);
        }
    }, []);
}


console.log(flatten([1, [4, 5, [6, [7, 8, 9]]]]));