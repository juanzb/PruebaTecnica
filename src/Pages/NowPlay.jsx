import useFetch from '../components/UseFetch'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom';

const NowPlay = () => {
  const navigate = useNavigate()
  const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/now_playing`);
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>

  const handleClick = (e) => {
    navigate(`/movies/${e.currentTarget.id}`)
  };
  
  const MoviesNowPlay = () => {
    return( <>
      <div className='grid grid-cols-5 m-2 content-around mt-10 mb-20'>
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
                  <b className='text-yellow-300 text-xs' >Votos: {e.vote_average}</b>
              </div>
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