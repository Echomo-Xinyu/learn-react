import { useState } from "react";
import PokemonList from "./PokemonList";
import FetchPokemonsButton from "./FetchPokemonsButton";
import SaveButton from "./SaveButton";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  function save() {
    return (
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) =>
        response.json()
      )
    )
  }

  return (
    <div>
      <SaveButton save={save}/>

      <FetchPokemonsButton
      // onXXX is a naming convention to indicate function but meaningless to React
        onFetch={(pokemons) => {
          setPokemons(pokemons)
        }}
      />

      {pokemons.length > 0 && (<PokemonList items={pokemons}/>)}
    </div>
  );
}
