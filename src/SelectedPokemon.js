import React from 'react'
import './SelectPokemon.css';

class SelectedPokemon extends React.Component{
    render(){
        // console.log("in selcted",this.props.pokemonName);
        let pokemon = this.props.selectedPokemon;
        console.log("selll", pokemon);
        return(<div>
              <p className="Sub-title">Selected Pokemon</p>
              <img src={pokemon.sprites.front_default} alt="pokemon-img" />
              <div>{pokemon.name}</div>
              <div>{pokemon.stats[0].base_stat}</div>
              <div>{pokemon.stats[1].base_stat}</div>
              <div>{pokemon.stats[2].base_stat}</div>
              <div>{pokemon.stats[3].base_stat}</div>
              <div>{pokemon.stats[4].base_stat}</div>
              <div>{pokemon.stats[5].base_stat}</div>
        </div>);
    }
}

export default SelectedPokemon;