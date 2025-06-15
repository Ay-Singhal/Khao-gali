// src/components/Header.jsx
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import KhaoGaliImage from "../utils/KhaoGali.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { colors } from "../ui-tokens";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur shadow">
      <div className="page flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/">
          <img
            src={KhaoGaliImage}
            alt="Khao Gali"
            className="h-12 sm:h-16"
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-4 font-medium">
            <li className="text-gray-600">
              Online: {onlineStatus ? "✓" : "✕"}
            </li>

            {/* Menu links */}
            <li>
              <Link to="/" className="hover:text-indigo-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>

            {/* Login/Logout button — disabled visually */}
            <li>
              <button
                onClick={() =>
                  setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
                }
                disabled
                className="rounded-lg px-4 py-[2px] text-gray-400 border border-gray-300 
                           cursor-not-allowed opacity-60"
              >
                {btnName}
              </button>
            </li>

            {/* User context */}
            <li className="font-bold text-indigo-700">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
