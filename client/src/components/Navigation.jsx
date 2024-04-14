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
    <nav className="flex gap-10 items-center justify-between px-10 w-screen border-b sticky">
      <img src={Logo} alt="Logo" width="125" />
      <ul className="flex gap-4">
        <li>
          <button
            className="nav-button"
            onClick={() => handleNavigate("/home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => handleNavigate("/inventory")}
          >
            Inventory
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={() => handleNavigate("/")}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
