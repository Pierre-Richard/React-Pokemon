import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/service-pokemon';
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    /* j'utilise mon service pour pouvoir recuperer la liste des pokemons depuis l'api rest  */
    /* et je mets à jour l'etat de mon composant avec les pokemons reçu */
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
  }, []);
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;