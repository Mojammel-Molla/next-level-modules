{
  // interface-generic

  interface Developer<X, Y = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: X;
    bike?: Y;
  }

  type XiaomiWatch = {
    brand: string;
    model: string;
  };

  const poorDeveloper: Developer<XiaomiWatch> = {
    name: 'Abul',
    computer: {
      brand: 'MSI',
      model: 'X255HR',
      releaseYear: 2023,
    },
    smartWatch: {
      brand: 'Xiaomi',
      model: '15s',
    },
  };
  interface AppleWatch {
    brand: string;
    model: string;
    feature: number;
    heartTrack: boolean;
  }

  interface YamahaBike {
    brand: string;
    model: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Motin',
    computer: {
      brand: 'MSI',
      model: 'X255HR',
      releaseYear: 2023,
    },
    smartWatch: {
      brand: 'Apple',
      model: 'series 7',
      feature: 10,
      heartTrack: true,
    },
    bike: {
      brand: 'Yamaha',
      model: 'R15',
    },
  };
  //
}
