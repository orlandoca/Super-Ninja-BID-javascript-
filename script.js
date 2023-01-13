class Ninja {
  constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  //agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
  sayName() {
    console.log("Nombre:" + this.nombre);
  }
  //agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
  showStats() {
    console.log(
      `nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad}, salud: ${this.salud}`
    );
  }
  //metodo que debe agregar +10 al ninja
  drinkSake() {
    this.salud = this.salud + 10;
  }
}

const ninja1 = new Ninja("Hyabusa", "5");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
  constructor(nombre, sabiduria = 10) {
    super(nombre, 200);
    this.velocidad = 10;
    this.fuerza = 10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log(
      "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses"
    );
  }
}
const Sensei1 = new Sensei("master splinter"); //creando el objeto sensei
Sensei1.speakWisdom(); //llamando metodo nuevo

Sensei1.showStats(); //llamando metodo de ninja
