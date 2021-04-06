import React from "react";
import "./App.css";
import Title from "./Title";
import SelectPokemon from "./SelectPokemon";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      search: "",
    };
  }
  componentDidMount() {
    async function fetchData() {
      let allData = await getAllPokemon("https://pokeapi.co/api/v2/pokemon?limit=10");

      async function getAllPokemon(url) {
        return new Promise((resolve, reject) => {
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              resolve(data);
            });
        });
      }
      console.log(allData);
      await loadingPokemon(allData.results);
    }
    fetchData();

    const loadingPokemon = async (results) => {
      let pokemonData = await Promise.all(results.map(async (pokemon) => {
          let eachPokemonData = await getPokemon(pokemon.url);

          async function getPokemon(url) {
            return new Promise((resolve, reject) => {
              fetch(url)
                .then((response) => response.json())
                .then((data) => {
                  resolve(data);
                });
            });
          }

          return eachPokemonData;
        })
      );
      this.setState({ pokemons: pokemonData });
    };

   
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    // .then(response => response.json())
    // .then( data => this.setState({pokemons: data.results}));
    // console.log("mount", this.state.pokemons);
  }

  render() {
    console.log("ren", this.state.pokemons);
    return (
      <div className="App">
        <Title />
        <SelectPokemon pokemonsData={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
