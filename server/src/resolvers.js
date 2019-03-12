const axios = require('axios');
const { reduce } = require('lodash');

const allPokemon = async () => {
  const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
  const fetchDataForOnePokemon = async (url) => await axios.get(url)
  const pokemon = await Promise.all(results.map(({ url }) => fetchDataForOnePokemon(url)))

  const parsedPokemon = pokemon.map(parseSinglePokemonInfo);
  return parsedPokemon
}

const flattenStats = (statsArr) => {
  let results = {}
  for (let i = 0; i < statsArr.length; i++) {
    const { stat } = statsArr[i]
    if (stat.name === 'special-defense') results['specialDefense'] = statsArr[i].base_stat
    else if (stat.name === 'special-attack') results['specialAttack'] = statsArr[i].base_stat
    else results[stat.name] = statsArr[i].base_stat
  }
  return results
}


const parseSinglePokemonInfo = ({ data }) => {
  const { id, sprites, weight, types, name, height, stats } = data
  const { back_default, back_shiny, front_default, front_shiny } = sprites
  const flattenedTypes = types.map(({ type }) => type.name);
  const flattenedStatsObject = flattenStats(stats)
  const { speed, defense, attack, hp, specialAttack, specialDefense } = flattenedStatsObject

  return {
    id,
    name,
    back_default,
    back_shiny,
    front_default,
    front_shiny,
    weight,
    height,
    types: flattenedTypes,
    speed,
    specialAttack,
    specialDefense,
    defense,
    attack,
    hp

  }
}

const resolvers = {
  Query: {
    AllPokemon: allPokemon
  },
}

module.exports = resolvers;
