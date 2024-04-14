import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navigation() {
  const navigate = useNavigate();
  const handleNavigate = (goTo) => {
    if (goTo === "/") {
      localStorage.removeItem("user");
    }
    navigate(goTo);
  };
  return (
    <nav className="flex gap-10 items-center justify-between px-10 w-screen border-b py-2">
      <img src={Logo} alt="Logo" width="125" />
      <ul className="flex flex-wrap gap-3 justify-center">
        <li>
          <button
            className="font-bold text-green-600 text-lg hover:bg-green-600 hover:text-white px-3 py-1 rounded"
            onClick={() => handleNavigate("/home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="font-bold text-green-600 text-lg hover:bg-green-600 hover:text-white px-3 py-1 rounded"
            onClick={() => handleNavigate("/inventory")}
          >
            Inventory
          </button>
        </li>
        <li>
          <button
            className="font-bold text-green-600 text-lg hover:bg-green-600 hover:text-white px-3 py-1 rounded"
            onClick={() => handleNavigate("/customers")}
          >
            Customers
          </button>
        </li>
        <li>
          <button
            className="font-bold text-green-600 text-lg hover:bg-green-600 hover:text-white px-3 py-1 rounded"
            onClick={() => handleNavigate("/")}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
