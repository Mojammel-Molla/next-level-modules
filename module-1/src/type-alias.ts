{
  //Type Alias

  type Student = {
    name: string;
    age: number;
    gender: boolean;
    contact?: string;
    address?: string;
  };

  const student1: {
    name: string;
    age: number;
    gender: boolean;
    contact: string;
    address: string;
  } = {
    name: 'Abul',
    age: 69,
    gender: true,
    contact: '019xxxxx',
    address: 'Dhaka',
  };
  const student2: Student = {
    name: 'Babul',
    age: 69,
    gender: true,
    contact: '019xxxxx',
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = 'Abul';
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 * num2;
}
