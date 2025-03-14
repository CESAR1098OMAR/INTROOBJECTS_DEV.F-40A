class Libro{
    constructor(titulo, autor, año, disponible){
        this.autor = autor;
        this.titulo = titulo;
        this.año = año;
        this.disponible = disponible;
    }

    disponibilidad(){
    console.log(`Título: ${this.titulo}. Autor: ${this.autor}. Año de publicación: ${this.año}.`);
    if(this.disponible === true){
        console.log("El libro está disponible.");
    }else if(this.disponible === false){
        console.log("El libro no está disponible.");
    }  else {console.log("Sin informacion");}
    } 
}

const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967, false);
const libro2 = new Libro("La Tierra Fragmentada: El Portal de los Obeliscos", "N.K. Jemisin", 2016, true);
const libro3 = new Libro("Siddharta", "Hermann Hesse", 1992, false);
const libro4 = new Libro("Outliers", "Malcom Gladwell", 2008, true);
const libro5 = new Libro("La Divina Comedia: El Purgatorio", "Dante Alighieri", 1318, true);
const libro6 = new Libro("Harry Potter y el Prisionero de Azkaban", "J.K. Rowling", 1999, false);

libro1.disponibilidad();
libro2.disponibilidad();
libro3.disponibilidad();
libro4.disponibilidad();
libro5.disponibilidad();
libro6.disponibilidad();