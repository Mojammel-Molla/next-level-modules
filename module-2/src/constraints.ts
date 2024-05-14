{
  //constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = 'next level development';
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 222,
    name: 'Abul',
    email: 'Abul@gmail.com',
    devType: 'Frontend',
  });
  const student2 = addCourseToStudent({
    id: 111,
    name: 'Babul',
    email: 'Babul@gmail.com',
    hobby: 'watching shows',
    isLazy: true,
  });
  const student3 = addCourseToStudent({
    id: '111',
    name: 'Babul',
    email: 'Babul@gmail.com',
  });
  //
}
