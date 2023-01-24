function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function =>{
  if( print )
    return printToConsole;
  else {
    return () => {}
  }
}

const blockPrototype = function( constructor: Function) {
  Object.seal( constructor );
  Object.seal( constructor.prototype );
}

function CheckValidPokemonID(){
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMehod = descriptor.value;

    descriptor.value = ( id: number ) => {
      if( id < 1 || id> 800) {
        return console.error('El id del Pokemon debe estar entre 1 y 800');
      } else {
        return originalMehod(id);
      }
    }
  }
}

function readOnly( isWritable: boolean = true): Function {
  return function( target: any, propertyKey: string) {

    const descriptor: PropertyDescriptor = {
      get() {
        return 'Fernando';
      },
      set(this, val){
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        });
      }
    }

    return descriptor;
  }
}

@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

  @readOnly()
  public publicAPI: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ){}

  @CheckValidPokemonID()
  savePokemonToDB( id: number) {
    console.log(`Pokemon guardado en DB ${id}}`)
  }
}