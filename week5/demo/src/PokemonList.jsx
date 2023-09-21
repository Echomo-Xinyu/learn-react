export default function PokemonList(props) {
  return (
      <ul>
        {props.items.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
  )
}
