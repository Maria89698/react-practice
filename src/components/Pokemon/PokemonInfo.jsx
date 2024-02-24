import { PureComponent } from "react";

export class PokemonInfo extends PureComponent{
    state = {
        pokemon: '',
        isLoading: false
    }

    componentDidUpdate(prevProps, prexState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
          this.setState({isLoading: true})
          fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
            .then(res=>res.json())
                .then(pokemon => {
                    this.setState({pokemon})
                    this.setState({isLoading: false})
                })
        }
    }

    render(){
        return(
            <div>
                {/* {{isLoading}&&<p>Loading...</p>} */}
                <h2>Pokemon Name</h2>
                <img src={this.state.pokemon.sprites.other['official-artwork'].front_default} alt="" />
            </div>
        )
    }
}