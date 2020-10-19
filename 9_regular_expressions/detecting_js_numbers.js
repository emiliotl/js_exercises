
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