import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
const CHARACTER_DETAILS = gql`
    query  character ($id:ID!) {
        character(id:$id){
            id
            name
            status
            species
            gender
            image 
            location{
                created
            }
        }
  }
    `
function CharactersDetails(props) {
    const id = props.match.params.id;
    const { loading, error, data } = useQuery(CHARACTER_DETAILS, {
        variables: { id: id }
    })
    if (loading) return <p>Loading...</p>;
    if (error) return <p> Oppss !!</p>;

    return (
        <div className='card'>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <img style={{ width: '100%', padding: '5px' }} src={data.character.image} alt='character' />
                </div>
                <div className='col-md-8 col-12'>
                    <h4>Name : {data.character.name}</h4>
                    <h4>Created : {data.character.location.created}</h4>
                    <h4>Status : {data.character.status}</h4>
                    <h4>Species : {data.character.species}</h4>
                    <h4>Gender : {data.character.gender}</h4>
                </div>
            </div>


        </div>
    );
}

export default CharactersDetails;