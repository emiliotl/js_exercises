
const {cars} = require('./second_module_sample.js');

exports.person = function() {
    return {
        'name': 'Pepe',
        'Age': 42,
        'car': cars()
    };
}

console.log(cars())

/*
 * No pude hacer mucho aqui, pero por ahora, lo que llegué a comprender de este ejercicio es que con esta referencia
 * circular, puedo hacer uso de la funcion del modulo importado pero no puedo hacer uso del exportado dentro del modulo
 * importado. Mi teoria seria que, en base a lo comentado en el libro, la funcion require depende de que el modulo
 * hubiese sido cargado, y como en este ejemplo, aun se esta ejecutando console.log(cars()) al mandar a llamar person()
 * en el otro modulo, me devuelve un error al mandar llamar una funcion sobre undefined.
 *
 * En caso de estar en lo correcto, supongo que la referencia circular pudiera tener un resultado diferente si se usara
 * algo como eventos donde el modulo pudiese ya estar cargado pero solo este en espera de que se realice el evento.
 */
