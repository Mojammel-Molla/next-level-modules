{
  //oop - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;
    // public liveYear: number;

    constructor(
      public name: string,
      public species: string,
      public sound: string,
      public liveYear: number
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
      // this.liveYear = liveYear;
    }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const dog = new Animal('Jobi', 'Russian', 'Bark', 15);
  const cat = new Animal('simba', 'persian', 'Meow', 10);
  cat.makeSound();
  //
}
