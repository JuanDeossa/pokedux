import logo from './assets/logo.svg'
import './styles/App.css'
import { useEffect} from 'react'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { getPokemons } from './hooks/usePokeApi'
import { getPokemonsWithDetailsAction, setLoadingAction, setPokemonsAction } from './actions/actions'
import { useSelector,useDispatch } from 'react-redux'
import { CardListSkeleton } from './components/CardListSkeleton'
import { FavoritesSection } from './components/FavoritesSection'


export function App() {
  const pokemons=useSelector(state=>state.data.pokemons)
  const favorites=useSelector(state=>state.data.favorites)
  const loading=useSelector(state=>state.ui.loading)
  const dispatch=useDispatch()
  // Effect
  useEffect(()=>{
    const getFetchedPokemons = async()=>{
      dispatch(setLoadingAction(true))
      const pokemonList=await getPokemons()
      dispatch(getPokemonsWithDetailsAction(pokemonList))
    }
    getFetchedPokemons()
  },[])
  ////////

  return (
    <div className="bg-gray-800 text-white text-center pt-8 text-4xl min-h-screen">
      <img className='mx-auto w-60' src={logo}/>
      <Searcher/>
      {loading
        ?<CardListSkeleton/>
        :<FavoritesSection favorites={favorites}/>
      }
      {loading
        ?<CardListSkeleton/>
        :<CardList pokemons={pokemons}/>
      }
    </div>
  )
}
