/*
 * Arrays have a reverse method that changes the array by inverting the order in
 * which its elements appear. For this exercise, write two functions, reverseArray
 * and reverseArrayInPlace. The first, reverseArray, takes an array as argument
 * and produces a new array that has the same elements in the inverse order. The
 * second, reverseArrayInPlace, does what the reverse method does: it modifies
 * the array given as argument by reversing its elements. Neither may use the
 * standard reverse method.
 *
 * Thinking back to the notes about side effects and pure functions in the
 * previous chapter, which variant do you expect to be useful in more situations?
 * Which one runs faster?
 */

function reverseArray(array) {
    let reversedArray = [];

    for (let member of array) {
        reversedArray.unshift(member);
    }

    return reversedArray;
}

function reverseArrayInPlace(array) {
    let reversedArray = [];
    let countLimit = array.length;

    for (let i = 0; i < countLimit; i++) {
        let member = array.pop();
        reversedArray.push(member);
    }
    for (let member of reversedArray) {
        array.push(member);
    }

    return array;
}

sampleArray = [3, 10, -1, 59, 500];
console.log(reverseArray(sampleArray));
console.log(sampleArray);
console.log(reverseArrayInPlace(sampleArray));
console.log(sampleArray);