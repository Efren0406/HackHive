import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const handleNavigate = (goTo) => {
    if (goTo === "/") {
      localStorage.removeItem("user");
    }
    navigate(goTo);
  };
  return (
    <nav className="flex gap-10 items-center justify-between px-10 py-5 w-screen border-b">
      <h1 className="font-bold">Logo</h1>
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
