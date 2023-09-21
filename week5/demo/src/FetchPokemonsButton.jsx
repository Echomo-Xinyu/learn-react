export default function FetchPokemonsButton(props) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
          .then((response) => response.json())
          .then((data) => {
            const pokemons = data.results;
            
            props.onFetch(pokemons);
          });
        }}
      >
        Show Pokemon
      </button>
    </div>
  )
}