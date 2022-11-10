import axios from "axios"
import { useDispatch } from "react-redux"
import { setLoadingAction } from "../actions/actions"

const URL='https://pokeapi.co/api/v2/pokemon?limit=18'


export const getPokemons= async(dispatch)=>{
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
