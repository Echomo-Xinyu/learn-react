import { useState } from "react";

function fetchPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then(
    (response) => {
      return response.json();
    }
  );
}

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          fetchPokemons().then((data) => {
            setPokemons(data.results);
          });
        }}
      >
        Show Pokemon
      </button>

      {pokemons.length > 0 && (
        <ul>
          {pokemons.map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
