{
  const user = {
    id: 123,
    name: {
      firstName: 'Abul',
      middleName: 'Kalam',
      lastName: 'Azad',
    },
    contact: '01xxxxxxxxxxx',
    address: 'Dhaka',
  };

  const {
    contact,
    name: { lastName },
  } = user;

  //array destructuring

  const friends = ['abul', 'kabul', 'babul'];
  const [, bestFriend, ...rest] = friends;
}
