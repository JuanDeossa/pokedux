import { data } from "autoprefixer"
import axios from "axios"

const URL='https://pokeapi.co/api/v2/pokemon?limit=151'

export const getPokemons= async()=>{
  try {
    const {data:{results}}=await axios.get(URL)
    return results
  }catch (error) {
    throw new Error(error)
  }
}

export const getPokemonDetails= async(pokemon)=>{
  try {
    const {data}=await axios.get(pokemon.url)
    return data
  }catch (error) {
    throw new Error(error)
  }
}
