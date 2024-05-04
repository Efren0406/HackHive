import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navigation() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleNavigate = (goTo) => {
    if (goTo === "/") {
      localStorage.removeItem("user");
    }
    navigate(goTo);
  };
  useEffect(() => {
    const localUser = localStorage.getItem("user");
    const userTo = JSON.parse(localUser);
    setUser(userTo);
  }, []);

  return (
    <nav className="flex items-center justify-between px-10 w-screen border-b py-2 flex-wrap">
      <div className="flex">
        <img src={Logo} alt="Logo" width="125" />
        <p className="text-2xl font-bold my-auto">Welcome {user.username}</p>
      </div>
      <ul className="flex flex-wrap gap-1 justify-center">
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
