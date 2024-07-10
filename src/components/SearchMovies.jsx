import { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';

import Lupa from '../assets/lupa.png'

const SearchMovies = () => {
  const [nameSearch, setNameSearch] = useState('')
  const {setQuery} = useContext(DataContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(nameSearch)
  };

  return (<>
    <div className="w-full h-[45vh] flex justify-center items-center mt-20 mb-20 py-10 ">
      <form className="w-full max-w-3xl" onSubmit={handleSubmit}>
        <h1 className='w-full text-5xl justify-center flex mb-10 uppercase font-bold text-gray-400'>find your favorite movie</h1>
        <div className="flex items-center border-b bg-slate-600 bg-opacity-40 rounded-full " >
          <input
            type="text"
            onChange={(e) => setNameSearch(e.target.value) }
            placeholder="Search for movies..."
            className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none pl-5"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-300 text-sm text-white py-1 px-2 rounded-full m-2"
          >
            <img src={Lupa} className='w-6'></img>
          </button>
        </div>
      </form>
    </div>
  </>)
}

export default SearchMovies