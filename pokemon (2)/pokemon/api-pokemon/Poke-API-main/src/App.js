import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonModal from "./components/PokemonModal/PokemonModal";
import { fetchPokemonsByGeneration, fetchPokemonDetails } from "./services/pokemonService";
import "./styles/global.css";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [generation, setGeneration] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonsByGeneration(generation);
        setPokemons(data);
      } catch (error) {
        console.error("Erro ao carregar Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemons();
  }, [generation]);

  const handlePokemonClick = async (pokemon) => {
    try {
      const pokemonDetails = await fetchPokemonDetails(pokemon.id);
      setSelectedPokemon({
        ...pokemon,
        types: pokemonDetails.types,
      });
    } catch (error) {
      console.error("Erro ao carregar detalhes do Pokémon:", error);
    }
  };

  const handleCloseModal = () => setSelectedPokemon(null);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
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
              className={`button ${generation === gen ? "active" : ""}`}
            >
              Geração {gen}
            </button>
          ))}
        </div>
      </header>

      {loading ? (
        <div className="loading">Carregando Pokémon...</div>
      ) : (
        <div className="pokemon-container">
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              onClick={handlePokemonClick}
            />
          ))}
        </div>
      )}

      <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />
    </div>
  );
}

export default App;