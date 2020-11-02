/*
 * The introduction of this book alluded to the following as a nice way to compute
 * the sum of a range of numbers:
 *
 * console.log(sum(range(1, 10)));
 *
 * Write a range function that takes two arguments, start and end, and returns
 * an array containing all the numbers from start up to (and including) end.
 *
 * Next, write a sum function that takes an array of numbers and returns the
 * sum of these numbers. Run the example program and see whether it does
 * indeed return 55.
 *
 * As a bonus assignment, modify your range function to take an optional third
 * argument that indicates the “step” value used when building the array. If no
 * step is given, the elements go up by increments of one, corresponding to the
 * old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
 * 9]. Make sure it also works with negative step values so that range(5, 2, -1)
 * produces [5, 4, 3, 2].
 */

function range(lower_bound, upper_bound, step= 1) {
    let numbers = [];

    if (lower_bound < upper_bound && step > 0) {
        for (let i = lower_bound; i <= upper_bound; i += step) {
            numbers.push(i);
        }
    } else if (lower_bound > upper_bound && step < 0) {
        for (let i = lower_bound; i >= upper_bound; i += step) {
            numbers.push(i);
        }
    } else {
        console.log("Given parameters won't produce a delimited range.");
    }
    return numbers;
}


function sum(array) {
    return array.reduce((a, b) => a + b);
}



console.log(range(10, 0, -1));
console.log(sum(range(1, 10)));