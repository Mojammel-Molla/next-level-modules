{
  //oop - inheritance

  class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(hours: number) {
      console.log(`${this.name} will sleep for ${hours}`);
    }
  }
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(period: number) {
      console.log(`${this.name} will sleep for ${period}`);
    }
  }
  const student1 = new Student('Abul', 20, 'Dhaka');
  const teacher1 = new Teacher('Motin', 40, 'Dhaka', 'Assistant');
  //
}
