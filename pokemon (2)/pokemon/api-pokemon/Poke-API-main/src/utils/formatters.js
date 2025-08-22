/**
 * Funções utilitárias para formatação de dados
 */

/**
 * Formata o nome do Pokémon com a primeira letra maiúscula
 * @param {string} name - Nome do Pokémon
 * @returns {string} Nome formatado
 */
export const formatPokemonName = (name) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
};

/**
 * Formata o ID do Pokémon com zeros à esquerda
 * @param {number|string} id - ID do Pokémon
 * @returns {string} ID formatado (ex: 001, 025, 150)
 */
export const formatPokemonId = (id) => {
  const numId = parseInt(id, 10);
  if (isNaN(numId)) return id;
  return numId.toString().padStart(3, '0');
};

/**
 * Obtém a cor de fundo baseada no tipo do Pokémon
 * @param {string} type - Tipo do Pokémon
 * @returns {string} Código de cor hexadecimal
 */
export const getTypeColor = (type) => {
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };

  return typeColors[type.toLowerCase()] || '#777777';
};