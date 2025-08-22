import React from 'react';
import './PokemonModal.css';

const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{pokemon.name}</h2>
        <img
          className="pokemon-image"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <p>
          <strong>Número:</strong> {pokemon.id}
        </p>
        <p>
          <strong>Tipo:</strong>{" "}
          {pokemon.types && pokemon.types.length > 0
            ? pokemon.types.join(", ")
            : "Carregando..."}
        </p>
      </div>
    </div>
  );
};

export default PokemonModal;