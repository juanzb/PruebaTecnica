import useFetch from '../components/UseFetch'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom';

  const NowPlay = () => {
  const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/now_playing`);
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>
  
  const MoviesNowPlay = () => {
    return( <>
      <div className='grid grid-cols-5 m-2 content-around'>
        {data.results.map((e,i) => {
          return (
            <div className='m-3 bg-opacity-4 bg-slate-800 hover:bg-slate-700' id={`muestra${i+1}`} key={i}>
              <Link to={e.original_title}>
                <img className='p-3' src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt="img-movie"/>
                <div className='pl-3 pr-3 pb-2 grid grid-cols-1'>
                    <b className='text-black text-xs' >{e.original_title}</b> 
                    <b className='text-gray-500 text-xs' >Votos: {e.vote_average}</b> 
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </>
    )
  }
  return (
  <>
    <MoviesNowPlay/>
  </>
  )
}

export default NowPlay