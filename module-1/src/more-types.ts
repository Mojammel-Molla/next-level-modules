{
  // nullable types

  const searchName = (value: string) => {
    if (value) {
      console.log('searching');
    } else {
      console.log('There is nothing to search');
    }
  };
  searchName('Abul');

  //unknown types

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === 'number') {
      const convertSpeed = (value * 1000) / 3600;
      console.log(convertSpeed);
    } else if (typeof value === 'string') {
      const [result, unit] = value.split(' ');
      const convertSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(convertSpeed);
    } else {
      console.log('Wrong input');
    }
  };
  getSpeedInMeterPerSecond(1000);

  // never

  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError('There is an error');
}
