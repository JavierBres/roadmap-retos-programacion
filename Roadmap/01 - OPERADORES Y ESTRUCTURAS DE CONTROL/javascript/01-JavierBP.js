//  * EJERCICIO:
//  * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
//  *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
//  *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)

// OPERADORES ARITMÉTICOS
console.log(`Suma de 3 + 14 = ${3 + 14}`);
console.log(`Resta de 7 - 3 = ${7 - 3}`);
console.log(`Multiplicación de 8 * 23 = ${8 * 23}`);
console.log(`División de 9 / 2 = ${9 / 2}`);
console.log(`El módulo de 25 % 3 = ${25 % 3}`);
console.log(`Exponenciación de 5 ** 8 = ${5 ** 8}`);

// OPERADORES DE ASIGNACIÓN
let number = 0
console.log(`Asignación ${number = 4}`);
console.log(`Asignación de suma ${number += 3}`);
console.log(`Asignación de resta ${number -= 2}`);
console.log(`Asignación de multiplicación ${number *= 5}`);
console.log(`Asignación de división ${number /= 3}`);
console.log(`Asignación de módulo ${number %= 2}`);
console.log(`Asignación de exponenciación ${number **= 5}`);

// OPERADORES DE COMPRACIÓN
console.log(`Igualdad por valor ${3 == "3"}`);
console.log(`Igualdad por identidad ${3 === "3"}`);
console.log(`Mayor que ${3 > 2}`);
console.log(`Menor que ${5 < 2}`);
console.log(`Mayor o igual que ${5 >= 5}`);
console.log(`Menor o igual que ${4 <= 2}`);
console.log(`No es igual ${4 != "4"}`);
console.log(`No es estrictamente igual ${4 !== "4"}`);

// OPERADORES LÓGICOS
console.log(`AND lógico ${3 == "3" && 8 > 5}`);
console.log(`OR lógico ${4 != 4 || 9 < 7}`);
console.log(`NOT lógico ${!(5 < 3 || 9 == 7)}`);

// OPERADOR TERNARIO
let numberA = 15
let numberB = 38
numberA > numberB ? console.log(`${numberA} es mayor que ${numberB}`) : console.log(`${numberA} es menor que ${numberB}`);

// OPERADOR TYPEOF
console.log(`Operador typeof ${typeof numberA}`);


//  * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
//  *   que representen todos los tipos de estructuras de control que existan
//  *   en tu lenguaje:
//  *   Condicionales, iterativas, excepciones...
//  * - Debes hacer print por consola del resultado de todos los ejemplos.

// IF / ELSE IF / ELSE
let age = 23
if (age == 18) {
    console.log("Es mayor de edad");
} else if (age > 18) {
    console.log(`Tiene más de 18 años. Tiene ${age} años`);
} else {
    console.log("Es menor de edad. Tiene menos de 18 años");
}

// SWITCH
let weather = 0
let day

switch (weather) {
    case 0:
        day = "sunny"
        break;
    case 1:
        day = "cloudy"
        break;
    case 2:
        day = "rainy"
        break;
    default:
        day = "variable weather"
}

console.log(day);

// FOR
for (let i = 0; i <= 5; i++) {
    console.log(`Número (for): ${i}`);
}

// WHILE
let character = 0
while (character <= 4) {
    console.log(`Número (while): ${character}`);
    character++
}

// DO WHILE
character = 0
do {
    console.log("Hello!");
    console.log(`Número (do while): ${character}`);
    character++
} while (character <= 4)

// FOR OF
let myArray = ["Lorena", "Miriam", "Alba"]
for (let name of myArray) {
    console.log(`Women's name: ${name}`);
}

//  * DIFICULTAD EXTRA (opcional):
//  * Crea un programa que imprima por consola todos los números comprendidos
//  * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
//  * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.

console.log("Lista de números:");

for (let i = 10; i <= 55; i++) {
    if (i === 16 || i % 3 == 0) {
        continue
    } else if (i % 2 == 0) {
        console.log(`Number: ${i}`);
    }
}
