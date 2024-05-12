// Reference Type --> Object

const user: {
  firstName: string;
  middleName: string;
  lastName: string;
} = {
  firstName: 'Abul',
  middleName: 'Kalam',
  lastName: 'Azad',
};

//Optional data Types

const user2: {
  firstName: string;
  middleName: string;
  lastName: string;
  isMarried?: boolean;
} = {
  firstName: 'Abul',
  middleName: 'Kalam',
  lastName: 'Azad',
};

//Literel data Types
const user3: {
  employ: 'developer';
  firstName: string;
  middleName: string;
  lastName: string;
  readonly isMarried?: boolean;
} = {
  employ: 'developer',
  firstName: 'Abul',
  middleName: 'Kalam',
  lastName: 'Azad',
  isMarried: true,
};

//Can be access any property by a dot (.)
user3.employ = 'developer';

//readOnly property can not be change
// user3.isMarried=false
