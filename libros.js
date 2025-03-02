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

agregarLibro('El principito');
agregarLibro('Los ojos de mi princesa');
agregarLibro('Las mil y una noche');
agregarLibro('Bajo la misma estrella');
agregarLibro('Yo te invente');

//impresion de prueba
// console.log(librosLeidos);

function mostrarLibrosLeidos(librosL) {
    for (let index = 0; index < librosL.length; index++) {
        console.log(index+1, librosL[index]);   
    }
}

console.log('Tu lista de libros leidos');
mostrarLibrosLeidos(librosLeidos);