import { Card } from "./Card";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function CardList({pokemons}) {
  return (
    <div className="w-full mt-6 grid grid-cols-1 gap-y-5 justify-center items-center lg:grid-cols-4 lg:gap-x-0 xl:grid-cols-6">
      {pokemons.map((pokemon,i)=>(
        (true)
          ?<Skeleton key={i} width={208} height={251} borderRadius={13}
            baseColor={"#e5e7e9"} highlightColor={"#626567"} duration={2}
            style={{backgroundColor:"#e5e7e9",opacity:0.3}} />
          :<Card key={i} name={pokemon.name} image={pokemon.sprites.front_default}/>
      ))}
    </div>
  )
}