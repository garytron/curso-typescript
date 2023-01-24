(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string  = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum FuerzasHeroes {
      flash = 5,
      superman = 100,
      batman = 1,
      acuaman = 0,
    }

    const fuerzaFlash: FuerzasHeroes = FuerzasHeroes.flash;
    const fuerzaSuperman: FuerzasHeroes = FuerzasHeroes.superman;
    const fuerzaBatman: FuerzasHeroes = FuerzasHeroes.batman;
    const fuerzaAcuaman: FuerzasHeroes = FuerzasHeroes.acuaman;

    
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  