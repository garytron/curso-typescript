(() => {
    const fullName = ( fisrtName: string, lastName?: string, upper: boolean = false): string => {
      
      if (upper) {
        return `${ fisrtName } ${ lastName || 'no lastname'}`.toUpperCase();
      } else {
        return `${ fisrtName } ${ lastName || 'no lastname'}`;
      }
    }
  
    const name = fullName('Tony');
  
    console.log({ name });
})()