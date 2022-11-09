import { getPokemonDetails } from "../hooks/usePokeApi";
import { SET_POKEMONS } from "./types";

export const setPokemonsAction=(payload)=>({
  type:SET_POKEMONS,
  payload,
})

export const getPokemonsWithDetailsAction=(pokemons=[])=>async(dispatch)=>{
  const pokemonsDetailed=await Promise.all(pokemons.map(pokemon=>
    getPokemonDetails(pokemon)
  ))
  dispatch(setPokemonsAction(pokemonsDetailed))
}
