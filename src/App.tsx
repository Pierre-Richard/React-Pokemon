import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
/* l'element router parmet de mettre en place le systeme de navigation */
/* Switch affiche le contenu d'un seule route à la fois */
/* Route décris chaque route de mon application */
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {

 return (
   <Router>
      <div>
         {/* Laa barre de navigation commun à toutes les pages */}
         <nav>
            <div>
               <div className="nav-wrapper teal">
                  <Link to="/" className="brand-logo center">Pokédex</Link>
               </div>
            </div>
         </nav>
         {/* Le Sytème des routes de notre application */}
         <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/Pokemons" component={PokemonList} />
            <Route path="/pokemons/edit/:id" component={PokemonEdit} />
            <Route path="/pokemons/:id" component={PokemonDetail} />
            <Route component={PageNotFound} />
         </Switch>
      </div>
   </Router>
 )
 }
export default App;
