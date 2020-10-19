
const {person} = require('./first_module_sample');

exports.cars = function() {
    return ['Ford', 'Nissan', person()];
}

console.log(person())