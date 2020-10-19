/*
 * Say you have a function primitiveMultiply that in 20 percent of cases multiplies
 * two numbers and in the other 80 percent of cases raises an exception
 * of type MultiplicatorUnitFailure. Write a function that wraps this clunky
 * function and just keeps trying until a call succeeds, after which it returns the
 * result.
 *
 * Make sure you handle only the exceptions you are trying to handle.
 */

class MultiplicationUnitFailure extends Error {}

function primitiveMultiply(arrayOfPossibilities) {
    let count = 0

    for (let value of arrayOfPossibilities) {
        if (typeof value === 'number') count++;
    }

    if ((count / arrayOfPossibilities.length) < 0.2) throw Error('Array must have 20% of its members as numbers');
    let randomMember = arrayOfPossibilities[getRandomInteger(arrayOfPossibilities.length)];

    try {
        if (typeof randomMember !==  'number') throw new MultiplicationUnitFailure('Function did not received numbers to multiply');
    } catch (e) {
        return e;
    }

    return randomMember * randomMember;
}

function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function retryMultiplicationFunction(functionName, arrayToPass) {
    let result = null;
    do {
        result = functionName(arrayToPass);
        console.log(result);
    } while (result instanceof MultiplicationUnitFailure);
}

retryMultiplicationFunction(primitiveMultiply, [2, true, false, [], {}]);