class Usuario {
    constructor (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
}
getFullName = () => {
return console.log(`Nombre completo: ${this.nombre} ${this.apellido}`)
}
addMascotas = (nombreMascota) => {
    this.mascotas.push(nombreMascota) 
    }
countMascotas = () => {
    return console.log(`cantidad de mascotas: ${this.mascotas.length}`)
}
addBookNames = (nombreLibro, autorLibro) => {
this.libros.push({nombreLibro, autorLibro})
}
getBookNames = () => {
let bookNames = this.libros.map((bookName)=> {
    return bookName.nombreLibro
});
console.log(`Nombres de libros: ${bookNames} `);
}
}

const usuario2 = new Usuario("Elver", "Dades");
usuario2.getFullName();
usuario2.addMascotas("panchito");
usuario2.addMascotas("pepito");
usuario2.addMascotas("filomena");
usuario2.countMascotas(); 
usuario2.addBookNames("1984", "George Orwell");
usuario2.addBookNames("El lobo estepario", "Hermann Hesse");
usuario2.addBookNames("La peste", "Albert Camus");
usuario2.getBookNames();
console.log (usuario2);

