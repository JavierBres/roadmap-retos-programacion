// EJERCICIO:
// - Crea ejemplos de funciones básicas que representen las diferentes
//     posibilidades del lenguaje:
//     Sin parámetros ni retorno, con uno o varios parámetros, con retorno...

// FUNCIÓN SIMPLE
function simpleFunction() {
    console.log("Hello simple function!");    
}
simpleFunction()

// FUNCIÓN CON PARÁMETROS
function parametersFunction(age) {
    console.log(`That person is ${age} years old.`);
}
parametersFunction(49)

// FUNCIONES ANÓNIMAS
const anonymousFunction = function(name, age) {
    console.log(`${name} is ${age} years old.`);    
}
anonymousFunction("Javi", 52)

// ARROW FUNCTIONS
const arrowFunction = (name) => {
    console.log(`Hello, my name is ${name}`);
}
arrowFunction("Javier")

// RETORNO DE VALORES
const returnValues = (a, b) => {
    return a ** b
}
console.log(returnValues(2, 4));

// - Comprueba si puedes crear funciones dentro de funciones.
//   - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
//   - Pon a prueba el concepto de variable LOCAL y GLOBAL.
//   - Debes hacer print por consola del resultado de todos los ejemplos.
//     (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)

// FUNCIONES ANIDADAS
function extFunction() {
    console.log("Soy una función externa!");
    function intFunction() {
        console.log("Soy una función interna!");        
    }
    intFunction()
}
extFunction()

// FUNCIÓN DE ORDEN SUPERIOR
function superiorFunction(callback, param) {
    callback(...param)
}
superiorFunction(anonymousFunction, ["Javier", 52])

//   DIFICULTAD EXTRA(opcional):
//   Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
//   - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
//   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
//     - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
//     - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
//     - La función retorna el número de veces que se ha impreso el número en lugar de los textos.

function hundredNumbers(text1, text2) {
    let counter = 0
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(text1 + " " + text2);            
        } else if (i % 3 == 0) {
            console.log(text1);            
        } else if (i % 5 == 0) {
            console.log(text2);            
        } else {
            console.log(i);
            counter += 1
        }
    }
    return console.log(`Cantidad de números que no son múltiplos de 3 o 5: ${counter}`);
}
hundredNumbers("Múltiplo 3", "Múltiplo 5")

//   Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
//   Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
