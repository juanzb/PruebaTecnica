import { useParams } from "react-router-dom"
import useFetch from "../components/UseFetch";
import Loading from "../components/Loading";

const DetailsMovie = () => {
  const { id } = useParams();
  const {data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}`)
  if (loading) return <Loading />
  if (error) return <> Error to load the page</>
  
  console.log(data)


  return(
  <>
    <h1>Detalles de Mmovie id: {id}</h1>
    <>qsfbafk</>
  </>)
}

export default DetailsMovie