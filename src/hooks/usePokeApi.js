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