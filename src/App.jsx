import './styles/App.css'
import { CardList } from './components/CardList'
import { Searcher } from './components/Searcher'

export function App() {
  return (
    <div className="bg-gray-800 text-white text-center pt-8 text-4xl ">
      POKEDUX
      <Searcher/>
      <CardList/>
    </div>
  )
}
