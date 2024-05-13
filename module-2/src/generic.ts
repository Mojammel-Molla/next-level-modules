{
  //generic type
  type GenericArray<T> = Array<T>;

  // const rollNumbers: Array<number> = [3, 4, 5, 6];
  const rollNumbers: GenericArray<number> = [3, 4, 5, 6];

  // const mentors: Array<string> = ['x', 'y', 'z'];
  const mentors: GenericArray<string> = ['x', 'y', 'z'];

  // const boolArray: Array<boolean> = [true, false, true, true];
  const boolArray: GenericArray<boolean> = [true, false, true, true];

  // array of object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: 'abul',
      age: 55,
    },
    {
      name: 'babul',
      age: 25,
    },
    {
      name: 'kabul',
      age: 34,
    },
  ];

  //generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<string, string> = ['Mr.x', 'Mr.Y'];

  const UserID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: 'abul', email: 'abul@gmail.com' },
  ];
}
