import { useParams } from "react-router-dom"
import useFetch from "../components/UseFetch"
import Loading from "../components/Loading"

import DefaultImage from "../assets/background-default.jpeg"

const DetailsMovie = () => {
  const { id } = useParams();
  const {data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}`)
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>

  return(
  <div className="bg-black -z-20" >
    <div 
      className="relative h-screen bg-cover bg-center opacity-40 " 
      style={ !data.backdrop_path 
        ? { backgroundImage: `url(${DefaultImage})` }
        : { backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.backdrop_path}')`  }}
    />
    <div className="absolute w-full opacity-100 bg-opacity-35 top-24 p-10 flex items-center ">
      <div className="w-1/3 flex flex-col items-start" >
        <img
            className="relative w-64 "
            alt="img-background-movie"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} 
        />
      </div>
      <div className="text-4xl w-full bg-white h-auto bg-opacity-30 p-10 ">
        <h1 className="bg-yellow-500 bg-opacity-60 text-black text-center uppercase font-bold mt-2 ">{data.title}</h1>
        <p className="text-justify text-sm text-black font-semibold m-6" >{data.overview}</p>
        <ul className="list-disc ml-16 mt-6">
          <li className="text-justify text-sm text-black font-semibold" > Release date: {data.release_date}</li>
          <li className="text-justify text-sm text-black font-semibold" > Only adult: {data.adult ? "No" : "Yes"}</li>
          { data.production_countries[0] !== undefined && <li className="text-justify text-sm text-black font-semibold" > Production Country: {data.production_countries[0].name}</li>}
          { data.production_companies[0] !== undefined && <li className="text-justify text-sm text-black font-semibold" > Production Companies: {data.production_companies[0].name}</li>}
          { data.spoken_languages[0] !== undefined && <li className="text-justify text-sm text-black font-semibold" > Spoken Languages: {data.spoken_languages[0].name}</li>}
          <li className="text-justify text-sm text-black font-semibold" > Status: {data.status}</li>
          <li className="text-justify text-sm text-black font-semibold" > Score: {data.vote_count}</li>
        </ul>
      </div>
    </div>
  </div>)
}

export default DetailsMovie