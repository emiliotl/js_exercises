
// 200 -> "My name is Marijn Haverbeke. You can email me at marijn@haverbeke.nl, or visit my website, https://marijnhaverbeke.nl/.
fetch('https://eloquentjavascript.net/author', {headers: {Accept: 'text/plain'}}).then(response => {
    console.log(response.text());
})

// 200 ->
// <!doctype html>
//
// <div vocab="http://schema.org/" typeof="Person">
//   <p><span property="name">Marijn Haverbeke</span>, <span
//   property="jobTitle">Programmer</span></p>
//
//   <p>You can reach me at <a href="mailto:marijn@haverbeke.nl"
//   property="email">marijn@haverbeke.nl</a>, or visit my web page, <a
//   href="https://marijnhaverbeke.nl/" property="url">marijnhaverbeke.nl</a>.</p>
// </div>
fetch('https://eloquentjavascript.net/author', {headers: {Accept: 'text/html'}}).then(response => {
    console.log(response.text());
})

// 200 ->
// {
//     "name": "Marijn Haverbeke",
//     "email": "marijn@haverbeke.nl",
//     "website": "https://marijnhaverbeke.nl/"
// }
fetch('https://eloquentjavascript.net/author', {headers: {Accept: 'application/json'}}).then(response => {
    console.log(response.text());
})

// 406 -> Not Acceptable
fetch('https://eloquentjavascript.net/author', {headers: {Accept: 'application/rainbows+unicordn'}}).then(response => {
    console.log(response.text());
})