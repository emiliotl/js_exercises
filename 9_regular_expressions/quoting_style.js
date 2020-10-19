
let first_version = "This is a text called 'meme'd text' that consists in presenting ol' famous memes like 'Pepe' and 'Ight imma head out' and more.\n";

console.log(first_version);

let second_version = first_version.replace(/\s'(.+?)'\s/g, ' "$1" ');
console.log("From using single quotes, now we present the text with double quotes: \n");
console.log(second_version);