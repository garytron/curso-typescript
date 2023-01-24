(() => {
  const fullName = ( firstName: string, lastName: string ): string => {
    return `${firstName} ${lastName}}` 
  }

  let noName: string = 'Peter';

  const name = fullName(noName, 'Parker');

  console.log({ name });
})()