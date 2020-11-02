/*
 * A circular dependency is a situation where module A depends on B, and B
 * also, directly or indirectly, depends on A. Many module systems simply forbid
 * this because whichever order you choose for loading such modules, you cannot
 * make sure that each module’s dependencies have been loaded before it runs.
 *
 * CommonJS modules allow a limited form of cyclic dependencies. As long as
 * the modules do not replace their default exports object and don’t access each
 * other’s interface until after they finish loading, cyclic dependencies are okay.
 *
 * The require function given earlier in this chapter supports this type of dependency
 * cycle. Can you see how it handles cycles? What would go wrong
 * when a module in a cycle does replace its default exports object?
 */


exports.person = function() {
    var {cars} = require('./second_module_sample.js');
    return {
        'name': 'Pepe',
        'Age': 42,
        'car': cars()
    };
}

console.log(cars());


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
