import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';


const ListMovies = () => {
  const navigate = useNavigate()
  const {data, loading, error} = useContext(DataContext)
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>
  console.log(data)
  
  const handleClick = (e) => {
    navigate(`/movies/${e.currentTarget.id}`)
  };
  
  return(
  <>
  { !data.results ? <></> :   
      <div className='grid grid-cols-5 m-2 content-around mt-10 mb-10'>
        {data.results.filter(movie => movie.poster_path ).map((movie,index) => {
          return (
            <div 
              className='m-3 bg-opacity-4 bg-slate-900 bg-opacity-50 hover:bg-slate-700 cursor-pointer' 
              key={index}
              onClick={handleClick}
              id={movie.id}
            >
                <img className='p-3' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="img-movie"/>
                <div className='pl-3 pr-3 pb-2 grid grid-cols-1'>
                    <b className='text-black text-xs uppercase'>{movie.original_title}</b>
                    <b className='text-yellow-300 text-xs' >Votos: {movie.vote_average}</b>
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