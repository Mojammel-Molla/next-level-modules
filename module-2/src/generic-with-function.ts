{
  // function with generic
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res = createArray('Bangladesh');
  const resGeneric = createArrayWithGeneric<number>(99);

  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: 'Abul',
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res1 = createArrayWithTuple<string, number>('Bangladesh', 999);
  const resTuple = createArrayWithTuple<string, { name: string }>(
    'Bangladeshi',
    {
      name: 'Mojid',
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = 'next level development';
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    
    name: 'Abul',
    email: 'Abul@gmail.com',
    devType: 'Frontend',
  });
  const student2 = addCourseToStudent({
    name: 'Babul',
    email: 'Babul@gmail.com',
    hobby: 'watching shows',
    isLazy: true;
  });
  //
}
