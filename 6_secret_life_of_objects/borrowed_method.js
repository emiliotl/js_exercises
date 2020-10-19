

let sampleObject = {'sample': 1};

const hasOwnPropertySymbol = Symbol('hasOwnProperty');
sampleObject[hasOwnPropertySymbol] = Object.hasOwnProperty;
sampleObject['hasOwnProperty'] = 2;

console.log(sampleObject.hasOwnProperty);
console.log(sampleObject[hasOwnPropertySymbol]('sample'));