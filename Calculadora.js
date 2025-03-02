/* Ejercicio 1: Calculadora Simple
Descripción: Crea una calculadora simple que permita realizar operaciones matemáticas básicas: 
suma, resta, multiplicación y división.
Requisitos:
    + Define cuatro funciones: sumar, restar, multiplicar, y dividir, cada una de las cuales toma 
      dos parámetros y devuelve el resultado de la operación correspondiente.
    + En el programa principal, llama a cada función con diferentes pares de números y muestra el 
      resultado en la consola. */

function suma(num1, num2) {
    let rsuma = num1 + num2;
    console.log(`${num1} + ${num2}`);
    return rsuma;
}

function resta(num1, num2) {
    let rresta = num1 - num2;
    console.log(`${num1} - ${num2}`);
    return rresta;
}

function multiplicar(num1, num2) {
    let rmult = num1 * num2;
    console.log(`${num1} x ${num2}`);
    return rmult;
}

function dividir(num1, num2) {
    if (num2 === 0){
        console.log(`${num1} / ${num2}`);
        return console.log('Indeterminado');
    }
    else{
        let rsuma = num1 / num2;
        console.log(`${num1} / ${num2}`);
        return rsuma;
    }
}

console.log('suma:', suma(6,23));
console.log('resta:', resta(6,23));
console.log('multiplicación:', multiplicar(6,23));
console.log('divición:', dividir(6,23));
console.log('divición:', dividir(6,0));
console.log('divición:', dividir(0,23));