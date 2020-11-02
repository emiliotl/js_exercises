/*
 * Write an expression that matches only JavaScript-style numbers. It must support
 * an optional minus or plus sign in front of the number, the decimal dot,
 * and exponent notation—5e-3 or 1E10—again with an optional sign in front of
 * the exponent. Also note that it is not necessary for there to be digits in front
 * of or after the dot, but the number cannot be a dot alone. That is, .5 and 5.
 * are valid JavaScript numbers, but a lone dot isn’t.
 */

let regular_expression = /([+-]?\d+(\.|E[-+]?\d*)|\.\d+(E[-+]?\d*)?|\d+)/;

console.log(`1- Expected: true; Found: ${regular_expression.test("42.0")}`);
console.log(`2- Expected: false; Found: ${regular_expression.test(".")}`);
console.log(`1- Expected: true; Found: ${regular_expression.test("-7E77")}`);
console.log(`1- Expected: true; Found: ${regular_expression.test("+7E77")}`);
console.log(`1- Expected: true; Found: ${regular_expression.test("2020")}`);
console.log(`1- Expected: true; Found: ${regular_expression.test("7E77")}`);
console.log(`1- Expected: false; Found: ${regular_expression.test("Sample")}`);
console.log(`1- Expected: true; Found: ${regular_expression.test("7E-77")}`);
console.log(`1- Expected: true; Found: ${regular_expression.test("7E+77")}`);
console.log(`3- Expected: true; Found: ${regular_expression.test("6.")}`);
console.log(`4- Expected: true; Found: ${regular_expression.test(".9")}`);