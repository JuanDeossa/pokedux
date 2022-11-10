import { GoThumbsup } from 'react-icons/go';
import { SlStar } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { setFvorite } from '../actions/actions';


export function Card({pokemon,id,name,image,types}) {
  const favorites=useSelector(state=>state.favorites)
  const dispatch=useDispatch()

  const handleFavorite=(id)=>()=>{
    dispatch(setFvorite(pokemon))
  };

  return (
    <div className={`mx-auto w-60 min-h-full ${!pokemon.onlyFavorite?"bg-white":"bg-yellow-700"} rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 lg:w-52 xl:w-60`}>
      <div href="#" className='w-full h-40'>
          <img className=" mx-auto rounded-t-lg w-3/5" src={image} alt={name}/>
      </div>
      <div className="pb-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">{types.map(type=>type.type.name).join(", ")}</p>
        <button onClick={handleFavorite(id)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
          {(pokemon.favorite)?<SlStar className=' w-6 h-6 fill-yellow-600'/>:<GoThumbsup className=' w-6 h-6'/>}
        </button>
      </div>
    </div>
  )
}
