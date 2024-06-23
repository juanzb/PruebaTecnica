import { useParams } from "react-router-dom"
import useFetch from "../components/UseFetch"
import Loading from "../components/Loading"

const DetailsMovie = () => {
  const { id } = useParams();
  const {data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}`)
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>
  // console.log(data)

  return(
  <>
    <div className="relative h-screen bg-cover bg-center opacity-40 " style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.backdrop_path}')` }} />
    <div className="absolute w-full opacity-100 bg-opacity-35 bottom-10 p-10 flex">
      <div className="w-1/3 flex flex-col items-start bg" >
        <img
            className="relative w-64 "
            alt="img-background-movie"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} 
        />
      </div>
      <div className="text-4xl w-full bg-black h-auto bg-opacity-40 p-10">
        <h1 className="text-amber-400 text-center uppercase font-bold mt-2 ">{data.title}</h1>
        <p className="text-justify text-sm text-yellow-200 m-6" >{data.overview}</p>
        <ul className="list-disc ml-16 mt-6">
          <li className="text-justify text-sm text-yellow-200" > Release date: {data.release_date}</li>
          <li className="text-justify text-sm text-yellow-200" > Only adult: {data.adult ? "No" : "Yes"}</li>
          { data.production_countries[0] !== undefined && <li className="text-justify text-sm text-yellow-200" > Production Country: {data.production_countries[0].name}</li>}
          { data.production_companies[0] !== undefined && <li className="text-justify text-sm text-yellow-200" > Production Companies: {data.production_companies[0].name}</li>}
          { data.spoken_languages[0] !== undefined && <li className="text-justify text-sm text-yellow-200" > Spoken Languages: {data.spoken_languages[0].name}</li>}
          <li className="text-justify text-sm text-yellow-200" > Status: {data.status}</li>
          <li className="text-justify text-sm text-yellow-200" > Score: {data.vote_count}</li>
        </ul>
      </div>
    </div>

  </>)
}

export default DetailsMovie