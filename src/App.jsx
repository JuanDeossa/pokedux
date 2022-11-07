import logo from './assets/logo.svg'
import './styles/App.css'
import { useEffect} from 'react'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { getPokemons } from './hooks/usePokeApi'
import { setPokemonsAction } from './actions/actions'
import { useSelector,useDispatch } from 'react-redux'

export function App() {
  const pokemons=useSelector(state=>state.pokemons)
  const dispatch=useDispatch()
  // Effect
  useEffect(()=>{
    const getFetchedPokemons = async()=>{
      const pokemonList=await getPokemons()
      dispatch(setPokemonsAction(pokemonList))
    }
    getFetchedPokemons()
  },[])
  ////////

  return (
    <div className="bg-gray-800 text-white text-center pt-8 text-4xl ">
      <img className='mx-auto w-60' src={logo}/>
      <Searcher/>
      <CardList pokemons={pokemons}/>
    </div>
  )
}
