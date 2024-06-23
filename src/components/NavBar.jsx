import { Link } from "react-router-dom"
import Lupa from '../assets/lupa.png'

const Navbar = () => {
  return (
  <>
    <nav className="bg-gray-800 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" className="text-3xl font-bold text-yellow-400">MOVIES</Link>
        </div>

        <div className="hidden md:flex space-x-4 uppercase">
          <Link to="TopRated" className="text-1xl text-gray-500 hover:text-black hover:bg-yellow-600 h-16 px-2 font-bold flex items-center">Top Rated</Link>
          <Link to="NowPlay" className="text-1xl text-gray-500 hover:text-black hover:bg-yellow-600 h-16 px-2 font-bold flex items-center">Now Play</Link>
          <Link to="Popular" className="text-1xl text-gray-500 hover:text-black hover:bg-yellow-600 h-16 px-2 font-bold flex items-center">Popular</Link>
          <Link to="Upcoming" className="text-1xl text-gray-500 hover:text-black hover:bg-yellow-600 h-16 px-2 font-bold flex items-center">Upcoming</Link>
        </div>
        <Link to="/">
          <div className="flex-shrink-0 bg-yellow-600 hover:bg-yellow-300 text-sm text-white py-1 px-2 rounded-full m-2" >
            <img src={Lupa} className='w-6'></img>
          </div>
        </Link>
      </div>
    </nav>
  </>)
}

export default Navbar