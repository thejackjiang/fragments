import React, { Component } from 'react'
import { startCase } from 'lodash';

export default function Pokemon(props) {
  const { pokemonInfo: { name, types, weight, id, back_default, back_shiny, front_default, front_shiny, height,
    speed,
    specialAttack,
    specialDefense,
    defense,
    attack,
    hp }
  } = props;
  return <div>
    <h2> No. {id} {startCase(name)} </h2>
    <img src={front_default} />
    <img src={back_default} />
    <img src={front_shiny} />
    <img src={back_shiny} />
    <h3> Types: {startCase(types[0])}, {types[1] && startCase(types[1])} </h3>
    <h3> Weight: {Number(weight)/10}lb </h3>
    <h3> Height: {Number(height)/10}m </h3>
    <h3>Stats</h3>
    <ul>
      <li>HP: {hp}</li>
      <li>Attack: {attack}</li>
      <li>Defense: {defense}</li>
      <li>Special Attack: {specialAttack}</li>
      <li>Special Defense: {specialDefense}</li>
      <li>Speed: {speed}</li>
    </ul>

  </div>
}