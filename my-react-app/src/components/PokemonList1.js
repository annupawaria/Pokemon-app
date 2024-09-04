// src/components/PokemonList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        const fetches = response.data.results.map(pokemon => axios.get(pokemon.url));
        Promise.all(fetches)
          .then(responses => setPokemonData(responses.map(res => res.data)))
          .catch(err => console.error(err));
      })
      .catch(error => console.error(error));
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div style={styles.cardContainer}>
        {filteredPokemon.map(pokemon => (
          <div key={pokemon.id} style={styles.card}>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              style={styles.image}
            />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px',
    textAlign: 'center',
    width: '150px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100px',
    height: '100px',
  },
};

export default PokemonList;
