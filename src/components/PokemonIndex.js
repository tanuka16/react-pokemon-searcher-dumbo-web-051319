import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
// import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state={
    pokemonCards:[],
    searchTerm:'',
    myTeam: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(res=>res.json())
    .then(pokemonData =>
      this.setState({
        pokemonCards: pokemonData}
      ))
  }

//form compenent
  newPokeSubmit=(pokeData)=>{
      // console.log(pokeData);           //check
      // debugger
      const pokeObject = {
        name: pokeData.name,
        sprites: {
          front: pokeData.frontUrl,
          back: pokeData.backUrl
        },
        stats: [
        {
          name: "hp",
          value: +pokeData.hp
        }
        ]
    }

      fetch(`http://localhost:3000/pokemon`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(pokeObject)
      })
      .then(res=> res.json())
      .then(newPokeData => {
        this.setState({pokemonCards: [...this.state.pokemonCards, newPokeData]})

      })
      // const pokeObj ={
      //     ...pokeData
      // }
      //update the array with the new value
  }

  onChangeFilterTerm=(event)=>{
    this.setState({searchTerm: [event.target.value]})
  }

  filterPoke=()=>{
    return this.state.pokemonCards.filter(onePoke=>onePoke.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  // pokemonCards = () => {
  //     return this.state.pokemonCards.filter(pokemon => {
  //       return pokemon.name.includes(this.state.searchTerm)
  //     })
  //   }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <input type="search" value={this.state.searchTerm} onChange={this.onChangeFilterTerm } />
        <br />
        <br />
        <br />
        <PokemonCollection pokemonCards={this.filterPoke()}  />
        <br />
        <PokemonForm newPokeSubmit={this.newPokeSubmit}/>
      </div>
    )
  }
}

export default PokemonPage

// pokemonCards={this.pokemonCards()s


// <Search name='searchTerm' onChange={this.onChangeFilterTerm} onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
