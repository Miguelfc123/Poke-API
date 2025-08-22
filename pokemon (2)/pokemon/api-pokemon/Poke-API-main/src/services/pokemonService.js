/**
 * Serviço para interagir com a PokeAPI
 */

/**
 * Busca uma lista de Pokémon por geração
 * @param {number} generation - Número da geração (1, 2 ou 3)
 * @returns {Promise} Promise com os resultados da API
 */
export const fetchPokemonsByGeneration = async (generation) => {
  let limit, offset;

  switch (generation) {
    case 1:
      limit = 151;
      offset = 0;
      break;
    case 2:
      limit = 100;
      offset = 151;
      break;
    case 3:
      limit = 135;
      offset = 251;
      break;
    default:
      limit = 151;
      offset = 0;
  }

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    throw error;
  }
};

/**
 * Busca detalhes de um Pokémon específico
 * @param {string|number} pokemonId - ID ou nome do Pokémon
 * @returns {Promise} Promise com os detalhes do Pokémon
 */
export const fetchPokemonDetails = async (pokemonId) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();
    return {
      ...data,
      types: data.types.map((typeInfo) => typeInfo.type.name),
    };
  } catch (error) {
    console.error("Erro ao buscar detalhes do Pokémon:", error);
    throw error;
  }
};