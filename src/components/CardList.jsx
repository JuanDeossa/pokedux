import { Card } from "./Card";

export function CardList({pokemons}) {
  return (
    <div className="mt-6 grid grid-cols-4 gap-5 mx-20">
      {pokemons.map(pokemon=>{
        return <Card/>
      })}
    </div>
  )
}

CardList.defaultProps={
  pokemons:Array(10).fill(null),
}