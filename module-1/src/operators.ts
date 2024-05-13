//spread operators
//rest operators
// destructuring

{
  const names1: string[] = ['Abul', 'kalam', 'Azad'];
  const names2: string[] = ['Joshim', 'Shosim', 'Goshim'];

  names1.push(...names2);

  //rest operator

  const greetFriends = (friend1: string, friend2: string) => {
    console.log(`hi${friend1} to ${friend2} `);
  };

  greetFriends('Abul', 'kalam')


  const eachFriends = (...friends:string[]) => {
    
    friends.forEach((friend)=> console.log(friend);)
  };
eachFriends('Abul', 'kalam', 'Azad')

}
