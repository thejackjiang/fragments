const typeDefs = `
  type Query {
    AllPokemon: [Pokemon] 
  }

  type Pokemon{
    id: ID
    name: String
    back_default: String
    back_shiny: String
    front_default: String
    front_shiny: String
    types: [String]
    weight: String
    height: String
    speed: String
    specialAttack: String
    specialDefense: String
    defense: String
    attack: String
    hp: String
  }

`

module.exports = typeDefs;