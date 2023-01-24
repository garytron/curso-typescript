(() => {
    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
      name: 'Barry Allen', 
      age: 24,
      powers: ['Super velocidad', 'Viajar en el tiempo'],
      getName() {
        return this.name;
      }
    }
    
    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
      name: 'Clark Kent', 
      age: 24,
      powers: ['Super velocidad', 'Viajar en el tiempo'],
    }

    console.log(flash.getName!());
})()