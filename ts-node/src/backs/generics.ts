
import { Hero as SuperHero} from '../clases/Hero';
import powers from '../data/powers';
import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain } from '../interfaces';

const Hero = 123;

const ironMan = new SuperHero('Tony Stark', 1, 42);

console.log(ironMan);
console.log(ironMan.power);

console.log(powers);

/* printObject( 123 );
printObject( new Date );
printObject( { a:1, b:2, c:3 } );
printObject( [1,2,3,4,5,6,7,8,9,10] );
printObject( 'Hola Mundo' );

console.log( genericFunctionArrow(3.141618).toFixed(2) );
console.log( genericFunction(3.141618).toFixed(2) ); */

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel);