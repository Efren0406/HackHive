import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    //register endpoint post user
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="border p-6 rounded-md flex flex-col gap-2">
        <h1 className="font-bold text-2xl mb-2 text-center">Create Account</h1>
        <div className="flex gap-2">
          <label className="font-bold text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="text-input"
          ></input>
        </div>
        <div className="flex gap-2">
          <label className="font-bold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="text-input"
          ></input>
        </div>
        <div className="flex gap-2">
          <label className="font-bold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-input"
          ></input>
        </div>
        <button
          className="border bg-orange-400 rounded-md w-fit px-4 py-2 mx-auto"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
