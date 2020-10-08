/*
 * Analogous to the some method, arrays also have an every method. This one
 * returns true when the given function returns true for every element in the array.
 * In a way, some is a version of the || operator that acts on arrays, and every is
 * like the && operator.
 *
 * Implement every as a function that takes an array and a predicate function
 * as parameters. Write two versions, one using a loop and one using the some
 * method.
 */

function everyWithLoop(array, predictiveFunction) {
    for (let i = 0; i < array.length; i++) {
        if (!predictiveFunction(array[i])) return false;
    }
    return true
}


function everyWithSome(array, predictiveFunction) {
    return !array.some(predictiveFunction);
}


console.log(everyWithLoop([1, 2, 3, 4, 5], (a) => a < 6));
console.log(everyWithSome([1, 2, 3, 4, 5], (a) => a > 6));