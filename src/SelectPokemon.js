import React from "react";
import SelectedPokemon from "./SelectedPokemon";
import "./SelectPokemon.css";

class SelectPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchList: [],
      selectedPokemon: {}
    };
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value }, () => {
      let searchInp = this.state.search.toUpperCase();
      const renderList = this.props.pokemonsData.filter((pokemon) => {
        return pokemon.name.toUpperCase().includes(searchInp);
      });
      this.setState({ searchList: renderList });
    });

    //     ()=> { console.log("search", this.state.search); console.log("searchlist", this.state.searchList);});
  };

  nameClicked = (event) => {
    let clickedName = event.target.textContent;
   for( let i=0; i< this.props.pokemonsData.length; i++){
    if(this.props.pokemonsData[i].name === clickedName){
        this.setState({ selectedPokemon: this.props.pokemonsData[i] }, ()=>{console.log("selected pok", this.state.selectedPokemon)});
        break;
    }
   }
    // console.log("selected pok", this.state.selectedPokemon)
  };
  render() {
    // console.log("in select poke" , this.props.pokemonsData )
    // console.log("search list", this.state.searchList);

    return (
      <div>
        <label className="Sub-title">Select a Pokemon</label>
        <input
          className="Search-input"
          type="text"
          placeholder="Select a pokemon"
          onChange={this.handleChange}
          value={this.state.search}
        />
     
        {this.state.searchList.map((eachPoke, i) => (
          <div key={i} className="Search-Name" onClick={this.nameClicked}>
            {eachPoke.name}
          </div>
        ))}
        {console.log("inside",this.state.selectedPokemon)}
    { Object.keys(this.state.selectedPokemon).length === 0 ? <p>not selected</p> :    <SelectedPokemon
          pokemonsData={this.props.pokemonsData}
          selectedPokemon={this.state.selectedPokemon}
        /> }
      
      </div>
    );
  }
}

export default SelectPokemon;
