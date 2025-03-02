/**Descomenta la llamada de la función que quiereas usar */

function saludar(){
    console.log('Hola, bienvenido a la clase!');
}

//saludar();

function mostrarMensaje(){
    console.log('Estoy aprendiendo funciones! :D');
}

// mostrarMensaje();

function sumar() {
    let resultado = 3 + 3;
    console.log('El resultado es:', resultado);
}

// sumar();

function sumarParametros(numero1, numero2) {
    console.log(numero1 + numero2);
}

// sumarParametros(10, 20);
// sumarParametros(50,50);

function saludoDiferente(nombre, apellido, edad, pasatiempo) {
    console.log(`Hola soy ${nombre} ${apellido}, tengo la edad 
        de ${edad} y me gusta ${pasatiempo}`);
}

// saludoDiferente('Zaira', 'Pacheco', 20, 'nadar');
// saludoDiferente('Miguel', 'Monterroso', 28, 'jugar videojuegos');

function restar(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2; //guardar valor en memoria para poder usarlos en cualquier parte del código
}

// let resultado = restar(5, 1);
//para evitar sobre escribir una variable
// const resultado1 = restar(10, 1);
// const resultado2 = restar(8, 1);

// console.log(resultado);
// console.log(resultado1);
// console.log(resultado2);

function mostrarResultado() {
    console.log('Desde la función', resultado);
}

// mostrarResultado();

//MANERAS DE DECLARAR FUNCIONES

//Arrow Function

const hola = (letra1, letra2) => {
    console.log(letra1, letra2);
}

// hola('z', 'd');

// setTimeout(() => {alert('se acabo el tiempo')}, 3000);

//Anonimas

const hola2 = function () {
    console.log('SOY UNA ANONIMA');
}

// hola2();

//ejemplo de arrow

function limite(nombre) {
    setTimeout(() => {
        alert(`Entrega tu examen, ${nombre}`)
    }, 5000);
}

// limite('Zaira Daniela');


//Scope GOBAL variables globales para todo el código
const global = 'Soy un global'

function mostrar() {
    console.log(global);
}

// mostrar();
// console.log(global);

//Scope LOCAL variables solo para un fragmento de código como una función
function local() {
    let varLocal = 'SOY UNA VARIABLE LOCAL';
    console.log(varLocal);
}

// local(); 

//Ejercicios funciones

/* EJERCICIO 1
Crear una función que reciba un array de numeros y retorne cuantos
numeros son pares */

function contarPares(numeros) {
    let contador = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] % 2 === 0 ) {
            console.log(numeros[index]);
            contador++;
        }
    }
    return contador;
}

//console.log(contarPares([1,2,3,4,5,6,7,8,9,10,11,12]));

/* EJERCICIO 2
Crea una función que reciba un array de numeros y retorne el numero 
más grande */

function encontarMayor(numeros) {
    let mayor = numeros[0];
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] < mayor) {
            mayor = numeros[index];
        }
    }
    return mayor;
}

//console.log(encontarMayor([20,10,5,3,2,21,19]));

/*EJERCICIO 3
Crea un objeto estudiante con nombre, edad y un array de notas, también
crea una función que reciba un objeto y que retorne el promedio de las notas*/

const estudiante = {
    nombre: 'Zaira',
    edad: 20,
    notas: [80,90,70]
}

function calcularPromedio(estudiante) {
    let suma = 0;
    for (let index = 0; index < estudiante.notas.length; index++) {
        suma += estudiante.notas[index];
    }
    return suma/estudiante.notas.length;
}

//console.log(calcularPromedio(estudiante));


/*EJERCICIO 4
Crear una función que reciba un array de objetos con estudiantes y
que retorne un nuevo array con los nombres y los promedios.*/

const estudiantes = [
    {nombre: 'Zaira', notas: [80, 90, 70]},
    {nombre: 'Daniela', notas: [90, 90, 75]},
    {nombre: 'Dulce', notas: [70, 90, 100]}
]

function generarReportes(estudiantes) {
    let reporte = [];
    for (let index = 0; index < estudiantes.length; index++) {
        let suma = 0;
        for (let j = 0; j < estudiantes[index].notas.length; j++) {
            suma += estudiantes[index].notas[j];
        }
        let promedio = suma / estudiantes[index].notas.length;

        reporte.push({nombre: estudiantes[index].nombre, promedio: promedio});
    }
    return reporte;
}

console.log(generarReportes(estudiantes));
