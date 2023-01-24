/* import { getPokemon } from './generics/get-pokemon';


getPokemon(1)
  .then( pokemon => console.log( pokemon.sprites.front_default ))
  .catch( error => console.log(error))
  .finally( () => console.log('Fin de getPokemon')) */

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

charmander.publicAPI = 'https://fernando-herrera.com';
console.log(charmander.savePokemonToDB(50));