import { GoThumbsup } from 'react-icons/go';
export function Card({name,image}) {
  return (
    <div className="mx-auto w-60 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 lg:w-52 xl:w-60">
      <a href="#">
          <img className=" mx-auto rounded-t-lg" src={image} alt={name}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">It is a pokemonr.</p>
        <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
          <GoThumbsup className=' w-6 h-6'/>
        </a>
      </div>
    </div>
  )
}
