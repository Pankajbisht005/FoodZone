import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";

import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();
 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex items-center">
        <img className="w-24 h-auto" src={LOGO_URL} alt="Logo" />
        <span className="ml-3 text-xl font-semibold text-red-500">Food Delivery</span>
      </div>

      <nav className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <span className="flex items-center">
              Online Status:{" "}
              <span className={`ml-2 ${onlineStatus ? "text-green-500" : "text-red-500"}`}>
                {onlineStatus ? "✅" : "🔴"}
              </span>
            </span>
          </li>
          <li>
            <Link to="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-500 transition-colors">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-500 transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-red-500 transition-colors">
              Cart ({cartItems.length})
            </Link>
          </li>
        </ul>
        <button
          className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
          onClick={() => {
            btnNameReact === "login" ? setBtnNameReact("logout") : setBtnNameReact("login");
          }}
        >
          {btnNameReact}
        </button>
        <li className="px-4 font-bold text-gray-700">Pankaj Bisht</li>
      </nav>
    </header>
  );
};

export default Header;
