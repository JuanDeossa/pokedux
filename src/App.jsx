import './styles/App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'
import { getPokemons } from './hooks/usePokeApi'
import { useEffect, useState } from 'react'
import logo from './assets/logo.svg'

export function App() {
  //State
  const [pokemons,setPokemons]=useState([])

  //Effect
  useEffect(()=>{
    const getFetchedPokemons = async()=>{
      const pokemonList=await getPokemons()
      setPokemons(pokemonList)
    }
    getFetchedPokemons()
  },[])

  return (
    <div className="bg-gray-800 text-white text-center pt-8 text-4xl ">
      <img className='mx-auto w-60' src={logo}/>
      <Searcher/>
      <CardList pokemons={pokemons}/>
    </div>
  )
}
