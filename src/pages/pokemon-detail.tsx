import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import PokemonService from '../services/service-pokemon';

/* je définis un type params pour pouvoir recuperer id dans l'url */
type Params = { id: string };
  /* j'ai utilise RouteComponentProps pour typer le paramettre récu deppuis le router */
  /* objet match contiens les données passées par le router */
const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    /* je definis un state pour sauvegarder le pokemon à afficher */
    /* par defaut le state contiens la valeur null */
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
  useEffect(() => {
    PokemonService.getPokemon(+match.params.id).then(pokemon => setPokemon(pokemon));
  }, [match.params.id]);
    
  return (
    <div>
        {/* ici je definis une condition si pokemon existe tu me l'affiche */}
      { pokemon ? (
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/edit/${pokemon.id}`} className="btn btn-floting halfway-fab waves-effet waves-light">
                  <i className="material-icons">edit</i>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Points de vie</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Dégâts</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span>
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formatDate(pokemon.created)}</td> 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                    {/* link me permet de générer un lien */}
                  <Link to="/">Retour</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        /* sinon tu m'affichera le h4 ! */
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
}
  
export default PokemonsDetail;