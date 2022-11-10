import { TbPokeball } from 'react-icons/tb';


export function FavoritesListEmptyMessage() {
  return (
    <div className="flex flex-col"  style={{height:327}}>
      <p className="align-middle my-auto text-4xl lg:text-6xl"> Please, Choose your favorite pokemons.</p>
      <div className='flex justify-center space-x-2 lg:space-x-6'>
      {Array(3).fill(<TbPokeball className=' w-20 h-20 fill-indigo-600 lg:w-32 lg:h-32'/>)}
      </div>
    </div>
  )
}