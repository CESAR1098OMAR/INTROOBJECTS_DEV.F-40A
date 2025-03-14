# INTROOBJECTS_DEV.F-40A_INTROJAVASCRIPT

# 📚 Clase Objetos en JavaScript

Este proyecto implementa una clase `Introduccion a Objetos` en JavaScript para modelar información sobre libros y su disponibilidad.

## 🚀 Características
- Creación de objetos `Libro` con título, autor, año de publicación y disponibilidad.
- Método `disponibilidad()` para mostrar la información del libro.
- Método `cambiarDisponibilidad()` para alternar la disponibilidad del libro.

## 📌 Uso del Código

```javascript
// Definición de la clase Libro
class Libro {
    constructor(titulo, autor, año, disponible) {
        this.autor = autor;
        this.titulo = titulo;
        this.año = año;
        this.disponible = disponible;
    }

    disponibilidad() {
        console.log(`Título: ${this.titulo}. Autor: ${this.autor}. Año de publicación: ${this.año}.`);
        console.log(this.disponible ? "El libro está disponible." : "El libro no está disponible.");
    }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
        console.log(`La disponibilidad del libro '${this.titulo}' ha sido cambiada a ${this.disponible ? "disponible" : "no disponible"}.`);
    }
}

// Creación de instancias
const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967, false);
const libro2 = new Libro("La Tierra Fragmentada: El Portal de los Obeliscos", "N.K. Jemisin", 2016, true);

// Mostrar información de los libros
libro1.disponibilidad();
libro2.disponibilidad();

// Cambiar disponibilidad de un libro
libro1.cambiarDisponibilidad();
libro1.disponibilidad();
```
