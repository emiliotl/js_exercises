

exports.cars = function() {
    const {person} = require('./first_module_sample');
    return ['Ford', 'Nissan', person()];
}
