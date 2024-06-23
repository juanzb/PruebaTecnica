import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import Loading from '../components/Loading'


const ListMovies = () => {
  const {data, loading, error} = useContext(DataContext)
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>
  
  
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };


  return(
  <>
  { !data.results ? <></> :   
      <div className='grid grid-cols-5 m-2 content-around'>
        {data.results.map((e,i) => {
          return (
            <div 
              className='m-3 bg-opacity-4 bg-slate-800 hover:bg-slate-700 cursor-pointer' 
              key={i}
              onClick={handleClick}
              id={e.id}
            >
                <img className='p-3' src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt="img-movie"/>
                <div className='pl-3 pr-3 pb-2 grid grid-cols-1'>
                    <b className='text-black text-xs uppercase'>{e.original_title}</b>
                    <b className='text-gray-500 text-xs' >Votos: {e.vote_average}</b>
                </div>
            </div>
          )
        })}
      </div>
  }
  </>
  )
}

export default ListMovies