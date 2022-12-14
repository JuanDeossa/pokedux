import { SET_FAVORITE,SET_POKEMONS } from "../actions/types";


export const pokemonsReducer=(state={
  pokemons:[],
  favorites:[],
},action)=>{
  switch (action.type) {
    case SET_POKEMONS:
      const pokemonsArray=action.payload.map(pokemon=>({
        ...pokemon,
        favorite:false,
        onlyFavorite:false,
      }))
      return{
        ...state,
        pokemons:pokemonsArray
      }
    case SET_FAVORITE:
      const id = action.payload.id
      const isFavorite = state.favorites.some(item=>item.id===id)
      const newPokemons=[...state.pokemons].map(pokemon=>(
        (pokemon.id===id)
          ?{...pokemon,favorite:!pokemon.favorite}
          :{...pokemon}
      ))
      if (!isFavorite) {
        return {
          ...state,
          pokemons:[
            ...newPokemons,
          ],
          favorites:[
            ...state.favorites,
            {
              ...action.payload,
              favorite:true,
              onlyFavorite:true
            }
          ],
        }
      } else {
        return {
          ...state,
          pokemons:[
            ...newPokemons,
          ],
          favorites:[
            ...state.favorites.filter(item=>item.id!==action.payload.id)
          ],
        }
      }
    default:
      return state
  }
}
