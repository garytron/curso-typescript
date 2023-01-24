(() => {
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string
    ){}
  }

  class Xmen extends Mutante {

    salvarMundo() {
      return 'Salvar el mundo!';
    }
  }
  
  class Villian extends Mutante {
    
    conquistarMundo() {
      return 'Mundo conquistado';
    }
  }

  const wolverine: Mutante = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Magnus');

  const printName = ( character: Mutante) => {
    console.log( character.realName );
  }

  printName(wolverine);
})()