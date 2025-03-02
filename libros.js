/* Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
Instrucciones para resolver el problema:
    + Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
    + Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. */

//array librosLeidos almacenara los libros ingresados
const librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

let libro = prompt('Ingresa el nombre del libro que leiste');
agregarLibro(libro);

//impresion de prueba
console.log(librosLeidos);
