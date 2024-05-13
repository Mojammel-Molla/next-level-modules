{
  //
  const age: number = 19;
  if (age >= 18) {
    console.log('Adult');
  } else {
    console.log('Not an Adult');
  }

  const isAdult = age >= 18 ? 'adult' : 'child';
  console.log({ isAdult });

  // nullish coalescing operator
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? 'Guest';
  const result2 = isAuthenticated ? isAuthenticated : 'Guest';
  console.log({ result1 }, { result2 });
}
