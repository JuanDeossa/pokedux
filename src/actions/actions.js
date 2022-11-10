import { getPokemonDetails } from "../hooks/usePokeApi";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemonsAction=(payload)=>({
  type:SET_POKEMONS,
  payload,
})
export const setLoadingAction=(payload)=>({
  type:SET_LOADING,
  payload,
})
export const setFvorite=(payload)=>({
  type:SET_FAVORITE,
  payload,
})

export const getPokemonsWithDetailsAction=(pokemons=[])=>async(dispatch)=>{
  const pokemonsDetailed=await Promise.all(pokemons.map(pokemon=>
    getPokemonDetails(pokemon)
  ))
  dispatch(setPokemonsAction(pokemonsDetailed))
  dispatch(setLoadingAction(false))
}
