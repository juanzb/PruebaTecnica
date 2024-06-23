import { Link } from "react-router-dom";

const Footer = () => {
  return (
        <footer className="relative w-full bottom-0 bg-gray-800 text-white py-10 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                <h5 className="text-lg font-semibold">Movie App</h5>
                <p className="text-gray-400">Your favorite movie database</p>
              </div>
              <div className="w-full sm:w-auto text-center sm:text-left">
                <h5 className="text-lg font-semibold">Quick Links</h5>
                <ul>
                  <li>
                    <Link to="#home" className="text-gray-400 hover:text-gray-200">Home</Link>
                  </li>
                  <li>
                    <Link to="#about" className="text-gray-400 hover:text-gray-200">About</Link>
                  </li>
                  <li>
                    <Link to="#contact" className="text-gray-400 hover:text-gray-200">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-auto text-center sm:text-left">
                <h5 className="text-lg font-semibold">Follow Us</h5>
                <ul className="flex justify-center sm:justify-start space-x-4">
                  <li>
                    <Link to="#facebook" className="text-gray-400 hover:text-gray-200">Facebook</Link>
                  </li>
                  <li>
                    <Link to="#twitter" className="text-gray-400 hover:text-gray-200">Twitter</Link>
                  </li>
                  <li>
                    <Link to="#instagram" className="text-gray-400 hover:text-gray-200">Instagram</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-gray-400">
              &copy; 2024 Movie App. All rights reserved.
            </div>
          </div>
        </footer>
      );
    };
    
export default Footer