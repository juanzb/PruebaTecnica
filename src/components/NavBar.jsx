import { Link } from "react-router-dom"
import Lupa from '../assets/lupa.png'
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  return (
  <>
    <nav className="bg-gray-800 sticky w-full top-0 z-20 h-[10vh] flex flex-row items-center">
      <div className="container mx-auto h-[10vh] flex items-center justify-between">
        <div className="ml-10">
          <Link to="/" className="text-3xl font-bold text-yellow-500">MOVIES</Link>
        </div>

        <div className="flex h-[10vh] space-x-4 uppercase">
          <Link 
            to="TopRated"
            className={ location.pathname == "/TopRated" ? "text-1xl text-black bg-yellow-500 bg-opacity-70 h-[10vh] px-2 font-bold flex items-center" : 
            "text-1xl text-gray-500 hover:text-black hover:bg-opacity-80 hover:bg-yellow-400 h-[10vh] px-2 font-bold flex items-center" }>Top Rated</Link>
          <Link 
            to="NowPlay" 
            className={ location.pathname == "/NowPlay" ? "text-1xl text-black bg-yellow-500 bg-opacity-70 h-[10vh] px-2 font-bold flex items-center" : 
            "text-1xl text-gray-500 hover:text-black hover:bg-opacity-80 hover:bg-yellow-400 h-[10vh] px-2 font-bold flex items-center" }>Now Play</Link>
          <Link 
            to="Popular" 
            className={ location.pathname == "/Popular" ? "text-1xl text-black bg-yellow-500 bg-opacity-70 h-[10vh] px-2 font-bold flex items-center" : 
            "text-1xl text-gray-500 hover:text-black hover:bg-opacity-80 hover:bg-yellow-400 h-[10vh] px-2 font-bold flex items-center" }>Popular</Link>
          <Link 
            to="Upcoming"
            className={ location.pathname == "/Upcoming" ? "text-1xl text-black bg-yellow-500 bg-opacity-70 h-[10vh] px-2 font-bold flex items-center" : 
            "text-1xl text-gray-500 hover:text-black hover:bg-opacity-80 hover:bg-yellow-400 h-[10vh] px-2 font-bold flex items-center" }>Upcoming</Link>
        </div>
        <Link to="/">
          <div className={ location.pathname == "/" ? "flex-shrink-0 bg-yellow-500 text-sm text-white py-1 px-2 rounded-full m-2" :
            "flex-shrink-0 bg-slate-500 hover:bg-yellow-300 text-sm text-white py-1 px-2 rounded-full m-2" }>
            <img src={Lupa} className='w-6'></img>
          </div>
        </Link>
      </div>
    </nav>
  </>)
}

export default Navbar