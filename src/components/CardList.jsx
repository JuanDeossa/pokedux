import { Card } from "./Card";

export function CardList({pokemons}) {
  return (
    <div className="w-full mt-6 grid grid-cols-1 gap-y-5 justify-center items-center lg:grid-cols-4 lg:gap-x-0 xl:grid-cols-6">
      {pokemons.map((pokemon,i)=>{
        return <Card key={i} name={pokemon.name} image={pokemon.sprites.front_default}/>
      })}
    </div>
  )
}