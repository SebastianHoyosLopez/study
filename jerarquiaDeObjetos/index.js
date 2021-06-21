class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.info = `Soy ${this.nombre}, tengo ${this.edad} años
    y soy  ${this.genero}`;
  }
  obtDetalles() {
    document.write(this.info + "<br/>");
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    alert(
      this.edad >= 15 ? "estas registrado" : "no tienes la edad suficiente"
    );
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, genero, asignatura, nivel) {
    super(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  asignar(){
    alert(`Tienes ${this.asignatura} del nivel ${this.nivel}`)
  }
}

let persona1 = new Persona("Andres", 14, "Hombre");
let estudiante1 = new Estudiante("Veronica", 15, "Mujer", "Matematicas", "A");
let profesor1 = new Profesor("Tomas", 40, "Hombre", "Ingles", 3)

persona1.obtDetalles();
estudiante1.registrar();
profesor1.asignar()
