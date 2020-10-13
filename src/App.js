import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import CharactersList from './components/characters/CharactersList';
import { Route, Switch } from 'react-router';
import CharactersDetails from './components/charactersDetails/CharactersDetails';
import { NavLink } from 'react-router-dom';

const GET_ALL_CARACTERS = gql`
{
  characters {
    results {
      id
      name
      image
      gender
      species
    }
  }
}
`
function App() {
  const {loading, error,data}=useQuery(GET_ALL_CARACTERS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p> Oppss !!</p>;
  const characters = data.characters.results;
  return (
    <div className="container">
        <h1 className='text-center'><NavLink to='/' style={{textDecoration:'none'}}>Rick and Morty</NavLink></h1>
      <hr></hr>
      <Switch>
        <Route exact path='/' component={()=><CharactersList characters={characters}/>} />
        <Route exact path='/:id' component={(props)=><CharactersDetails {...props}/>} />
      </Switch>
     
    </div>
  );
}

export default App;
