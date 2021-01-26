import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
/* j importe useHistory depuis react-router-dom */
import { useHistory } from 'react-router-dom';

type Props = {
  pokemon: Pokemon
  borderColor?: string
};
  /* je definis la couleur par defaut de mes bodures */
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor ='#009688'}) => {
    

    /* je stock dans mon state la couleur de ma bordure */
    /* setColor me permet de modifier la couleur de mon State */
    const [ color ,setColor] = useState<string>();

    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor); // je montre la couleur de ma bordure ! 
    }

    const hideBorder = () => {
        setColor('#f5f5f5'); // je remets la couleur ene gris
    }

    const goToPokemon = (id: number) => {
      history.push(`/pokemons/${id}`);
    }

  return (
    <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder} >
      <div className="card horizontal" style= {{ borderColor: color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map(type => ( 
                <span key={type} className={formatType(type)}>{type}</span>
                ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;