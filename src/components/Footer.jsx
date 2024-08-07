import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 pt-8 h-[35vh]">
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap">
          <div className="w-1/3 text-left">
            <h2 className="text-2xl font-bold text-gray-400">MOVIES</h2>
            <p className="mt-2">Find and explore your favorite movies and TV shows with our comprehensive database.</p>
          </div>
          <div className="w-1/3 flex justify-center mb-4 ">
            <div className="grid grid-cols-1">
            <h2 className="text-2xl font-bold text-gray-400 uppercase">social networks</h2>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              Instagran
              </a>
            </div>
          </div>
          <div className="w-1/3 flex mb-4 justify-center">
            <nav className=" grid grid-cols-1 ">
            <h2 className="text-2xl font-bold text-gray-400 uppercase">Navigation</h2>
              <Link to="/TopRated" className="hover:text-yellow-300">Top Rated</Link>
              <Link to="/NowPlay" className="hover:text-yellow-300">Now Playing</Link>
              <Link to="/Popular" className="hover:text-yellow-300">Popular</Link>
              <Link to="/Upcoming" className="hover:text-yellow-300">Upcoming</Link>
            </nav>
          </div>
        </div>
      </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2024 Movies. All rights reserved.</p>
        </div>
    </footer>
  )
    };
    
export default Footer