(() => {
  const fullName = ( fisrtName: string, ...restArgs: string[] ): string => {
    return `${ fisrtName } ${ restArgs.join(' ') }`;
  }

  const superman = fullName('Clark', 'Joseph', 'Kent');

  console.log({ superman });
})()