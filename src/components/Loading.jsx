import ImgLoading from '../assets/e26300c0c746d3163a0f48223c897cee.gif'

const Loading = () => {
  return (<>
  <div className="grid grid-cols-1 w-full justify-items-center" >
    <img className="h-96" alt="Loading" src={ImgLoading} />
    <h1 className="text-5xl font-bold text-neutral-100" >Loading . . .</h1>
  </div>
  </>)
}

export default Loading