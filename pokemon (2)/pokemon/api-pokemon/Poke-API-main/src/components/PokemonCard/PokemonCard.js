import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ pokemon, onClick }) => {
  const pokemonId = pokemon.url.split("/")[6];
  
  return (
    <div className="pokemon-card" onClick={() => onClick({ name: pokemon.name, id: pokemonId })}>
      <img
        className="pokemon-image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        alt={pokemon.name}
      />
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <p>Número: {pokemonId}</p>
      </div>
    </div>
  );
};

export default PokemonCard;