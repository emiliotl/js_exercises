/*
 * Imagine you have written a story and used single quotation marks throughout
 * to mark pieces of dialogue. Now you want to replace all the dialogue quotes
 * with double quotes, while keeping the single quotes used in contractions like
 * are not.
 *
 * Think of a pattern that distinguishes these two kinds of quote usage and
 * craft a call to the replace method that does the proper replacement.
 */

let first_version = "This is a text called 'meme'd text' that consists in presenting ol' famous memes like 'Pepe' and 'Ight imma head out' and more.\n";

console.log(first_version);

let second_version = first_version.replace(/\s'(.+?)'\s/g, ' "$1" ');
console.log("From using single quotes, now we present the text with double quotes: \n");
console.log(second_version);