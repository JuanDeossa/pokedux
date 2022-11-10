import { Card } from "./Card";

export function FavoritesList({pokemons}) {
  return (
    <div className="mx-8 mt-6 pb-2 grid grid-flow-col gap-x-5 justify-start items-center overflow-x-auto">
      {pokemons.map((pokemon,i)=>(
        <Card pokemon={pokemon} key={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} id={pokemon.id}/>
      ))}
    </div>
  )
}