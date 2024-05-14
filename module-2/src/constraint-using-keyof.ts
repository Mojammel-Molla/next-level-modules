{
  // constraint using keyOf

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = 'bike' | 'car ' | 'ship'; //Manually
  type Owner2 = keyof Vehicle;

  const user = {
    name: 'Mr P',
    age: 29,
    address: 'Dhaka',
  };

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  getPropertyValue(user, 'name');

  const car = {
    model: 'Toyota',
    year: 2003,
  };
  getPropertyValue(car, 'year');
  //
}
