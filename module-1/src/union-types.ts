{
  //union types

  type Frontend = 'FresherDeveloper' | 'JuniorDeveloper';
  const newDeveloper: Frontend = 'JuniorDeveloper';

  type User = {
    name: string;
    email: string;
    gender: 'male' | 'female';
    bloodGroup: 'A+' | 'B+' | 'A-';
  };

  const user1: User = {
    name: 'Abul',
    email: 'Abul@gmail.com',
    gender: 'male',
    bloodGroup: 'A+',
  };

  type FrontendDeveloper = {
    skills: string[];
    keySkill1: 'Frontend';
  };
  type BackendDeveloper = {
    skills: string[];
    keySkill2: 'Backend';
  };
  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'CSS', 'NodeJs'],
    keySkill1: 'Frontend',
    keySkill2: 'Backend',
  };
}
