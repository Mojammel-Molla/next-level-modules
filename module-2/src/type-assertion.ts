{
  //

  // type assertion

  let anything: any;

  anything = '2222';

  (anything as string).length;

  const kgToGm = (value: number | string): number | string | undefined => {
    if (typeof value === 'number') {
      return value * 1000;
    } else if (typeof value === 'string') {
      const converted = parseFloat(value) * 1000;
      return converted;
    }
  };
  const result1 = kgToGm(2) as number;
  const result2 = kgToGm('2') as string;
  //
}
