/*
 * Code golf is a term used for the game of trying to express a particular program
 * in as few characters as possible. Similarly, regexp golf is the practice of writing
 * as tiny a regular expression as possible to match a given pattern, and only that
 * pattern.
 *
 * For each of the following items, write a regular expression to test whether any
 * of the given substrings occur in a string. The regular expression should match
 * only strings containing one of the substrings described. Do not worry about
 * word boundaries unless explicitly mentioned. When your expression works, see
 * whether you can make it any smaller.
 *
 * 1. car and cat
 * 2. pop and prop
 * 3. ferret, ferry, and ferrari
 * 4. Any word ending in ious
 * 5. A whitespace character followed by a period, comma, colon, or semicolon
 * 6. A word longer than six letters
 * 7. A word without the letter e (or E)
 *
 * Refer to the table in the chapter summary for help. Test each solution with
 * a few test strings.
 */

let regular_expression;

console.log('1. car and cat');
regular_expression = /ca[tr]/
console.log(`1 - Expected: true; Found: ${regular_expression.test('This car is white')}`);
console.log(`1 - Expected: false; Found: ${regular_expression.test('Kachow')}`);
console.log(`1 - Expected: true; Found: ${regular_expression.test('A single cat')}\n`);

console.log('2. pop and prop');
regular_expression = /pr?op/;
console.log(`2 - Expected: true; Found: ${regular_expression.test('pop is cool')}`);
console.log(`2 - Expected: false; Found: ${regular_expression.test('A single statement')}`);
console.log(`2 - Expected: true; Found: ${regular_expression.test('That is a property')}\n`);

console.log('3. ferret, ferry, and ferrari');
regular_expression = /ferr(et|y|ari)/;
console.log(`3 - Expected: true; Found: ${regular_expression.test('A small ferret')}`);
console.log(`3 - Expected: true; Found: ${regular_expression.test('The ferry is sinking')}`);
console.log(`3 - Expected: false; Found: ${regular_expression.test('Sample')}`);
console.log(`3 - Expected: true; Found: ${regular_expression.test('That ferrari is too fast')}\n`);

console.log('4. Any word ending in ious');
regular_expression = /\b.*ious\b/;
console.log(`4 - Expected: false; Found: ${regular_expression.test('Is that word here?')}`);
console.log(`4 - Expected: true; Found: ${regular_expression.test('Delicious')}\n`);

console.log('5. A whitespace character followed by a period, comma, colon, or semicolon');
regular_expression = /\s(\.|,|:|;)/;
console.log(`5 - Expected: true; Found: ${regular_expression.test('S .')}`);
console.log(`5 - Expected: true; Found: ${regular_expression.test('W ,')}`);
console.log(`5 - Expected: true; Found: ${regular_expression.test('E :')}`);
console.log(`5 - Expected: true; Found: ${regular_expression.test('! ;')}`);
console.log(`5 - Expected: false; Found: ${regular_expression.test(':v.')}\n`);

console.log('6. A word longer than six letters');
regular_expression = /\w{6,}/;
console.log(`6 - Expected: false; Found: ${regular_expression.test('Here comes that boi!')}`);
console.log(`6 - Expected: true; Found: ${regular_expression.test('A widepeepohappy appeared')}\n`);

console.log('7. A word without the letter e (or E)');
regular_expression = /\b[^eE]\b/;
console.log(`7 - Expected: false; Found: ${regular_expression.test('PEPE')}`);
console.log(`7 - Expected: true; Found: ${regular_expression.test('\\[T]/')}`);
console.log(`7 - Expected: false; Found: ${regular_expression.test('PraiseTheSun')}\n`);