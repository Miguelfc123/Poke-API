  import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let limit, offset;

    if (generation === 1) {
      limit = 151;
      offset = 0;
    } else if (generation === 2) {
      limit = 100;
      offset = 151;
    } else if (generation === 3) {
      limit = 135;
      offset = 251;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [generation]);

  const openModal = async (pokemon) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
    );
    const data = await response.json();
    const types = data.types.map((typeInfo) => typeInfo.type.name);
    setSelectedPokemon({ ...pokemon, types });
  };

  const closeModal = () => setSelectedPokemon(null);

  const filteredPokemons = pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase()) // filtra só os que começam com o texto
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokémon Cards</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Pesquisar Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="button-group">
          {[1, 2, 3].map((gen) => (
            <button
              key={gen}
              onClick={() => setGeneration(gen)}
              className={generation === gen ? "active" : ""}
            >
              Geração {gen}
            </button>
          ))}
        </div>
      </header>

      <div className="pokemon-container">
        {filteredPokemons.map((pokemon, index) => {
          const pokemonId = pokemon.url.split("/")[6];
          return (
            <div
              key={index}
              className="pokemon-card"
              onClick={() => openModal({ name: pokemon.name, id: pokemonId })}
            >
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
        })}
      </div>

      {selectedPokemon && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h2>{selectedPokemon.name}</h2>
            <img
              className="pokemon-image"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`}
              alt={selectedPokemon.name}
            />
            <p>
              <strong>Número:</strong> {selectedPokemon.id}
            </p>
            <p>
              <strong>Tipo:</strong>{" "}
              {selectedPokemon.types.length > 0
                ? selectedPokemon.types.join(", ")
                : "Carregando..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
