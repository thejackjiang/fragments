import React, { Component } from 'react'
// import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import Pokemon from './Pokemon';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={allPokemon}>
          {props => {
            const { data: { AllPokemon }, loading, error, refetch } = props
            let mapped;
            if (AllPokemon) {
              mapped = AllPokemon.map((elm, index) => <div key={index}><Pokemon pokemonInfo={elm} /></div>)
            }
            return (
              <div>
                <h3>{mapped}</h3>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

App.fragment = {
  AllSprites: gql`
    fragment AllSprites on Pokemon {
      back_default
      back_shiny
      front_default
      front_shiny
    }
  `,
  AllStats: gql`
    fragment AllStats on Pokemon {
      height
      speed
      specialAttack
      specialDefense
      defense
      attack
      hp
  }
  `,
  PhysicalAttributes: gql`
    fragment PhysicalAttributes on Pokemon {
      weight
      height
    }
  `,
  BaseFields: gql`
    fragment BaseFields on Pokemon {
      id
      name
    }
  `
}

const allPokemon = gql`
{
  AllPokemon{
    ... BaseFields
    ... AllSprites
    ... PhysicalAttributes
    ... AllStats
    types
  }
}
${App.fragment.AllSprites}
${App.fragment.AllStats}
${App.fragment.PhysicalAttributes}
${App.fragment.BaseFields}
`

export default App
