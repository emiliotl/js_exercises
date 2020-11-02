/*
 * Use the reduce method in combination with the concat method to “flatten”
 * an array of arrays into a single array that has all the elements of the original
 * arrays.
 */

function flatten(nestedArray) {
    return nestedArray.reduce((a, b) => {
        if (Array.isArray(b)) {
            return a.concat(flatten(b));
        } else {
            return a.concat(b);
        }
    }, []);
}


console.log(flatten([1, [4, 5, [6, [7, 8, 9]]]]));