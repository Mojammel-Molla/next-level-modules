// normal functions
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}
addNormal(5, 10);

// arrow functions
const addArrow = (num1: number, num2: number): number => {
  return num1 * num2;
};

addArrow(10, 5);

//Object functions

const poorUser = {
  name: 'Abul',
  balance: 10,
  addBalance(balance: number): string {
    return `This is the balance of ${this.name} amount is ${
      this.balance + balance
    }`;
  },
};

const arr: number[] = [1, 5, 70, 43];

const newArray: number[] = arr.map((elem: number): number => elem * elem);
