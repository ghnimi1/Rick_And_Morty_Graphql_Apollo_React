import React from 'react';
import { Link } from 'react-router-dom';

function CharacterItem({ character }) {
    return (
        <div className='col-12 mx-auto col-md-6 col-lg-4'>
            <Link to={`/${character.id}`}>
                <img style={{ cursor: 'pointer' }} src={character.image} alt='character' />
            </Link>
            <h4 className='text-center'>{character.name}</h4>
        </div>
    );
}

export default CharacterItem;