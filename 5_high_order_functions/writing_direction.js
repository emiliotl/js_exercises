/*
 * Write a function that computes the dominant writing direction in a string of
 * text. Remember that each script object has a direction property that can be
 * "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
 *
 * The dominant direction is the direction of a majority of the characters that
 * have a script associated with them. The characterScript and countBy functions
 * defined earlier in the chapter are probably useful here.
 */

import "../scripts.js";

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name === name);
    if (known === -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name !== "none");

  return scripts.reduce((a, b) => {
    return a.count < b.count ? b : a;
  }).name;
}

console.log(textScripts("Hello!"));
// → ltr
console.log(textScripts("Hey, مساء الخير"));
// → rtl