import React from 'react';
import CharacterItem from './CharacterItem';

function CharactersList({characters}) {
    return (
        <div className='row'>
            {characters.map(character=>{
                return(
                    <CharacterItem character={character} key={character.id}/>
                )
            })}
        </div>
    );
}

export default CharactersList;