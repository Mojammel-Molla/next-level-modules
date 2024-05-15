{
  //type-guards

  //typeof
  type Add = string | number;
  const add = (param1: Add, param2: Add): Add => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add(2, 4);
  const result2 = add('2', 4);

  //
}
