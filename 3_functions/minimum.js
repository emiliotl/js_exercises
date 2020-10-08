/*
 * The previous chapter introduced the standard function Math.min that returns
 * its smallest argument. We can build something like that now. Write a function
 * min that takes two arguments and returns their minimum.
 */

function min(first_value, second_value) {
    return first_value < second_value ? first_value : second_value;
}

console.log(min(10, 33.9918));