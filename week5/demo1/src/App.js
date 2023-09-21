import { useState } from "react";
import PokemonList from "./PokemonList";
import FetchPokemonsButton from "./FetchPokemonsButton";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div>
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
