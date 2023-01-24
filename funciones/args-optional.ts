(() => {
  const fullName = ( fisrtName: string, lastName?: string): string => {
    return `${ fisrtName } ${ lastName || 'no lastname'}`;
  }

  const name = fullName('Tony');

  console.log({ name });
})()