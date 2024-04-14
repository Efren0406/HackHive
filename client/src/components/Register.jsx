import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const registerUser = async () => {
        const res = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await res.json();

        if (res.status != 200) {
          setAlert("Email already registered");
        } else {
          navigate("/");
          console.log(data);
        }
      };
      registerUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="border p-6 rounded-md flex flex-col gap-2">
        <h1 className="font-bold text-2xl mb-2 text-center">Create Account</h1>
        <div className="flex gap-2 items-center">
          <label className="font-bold">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="text-input"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-bold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="text-input"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-bold">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="text-input"
            onChange={handleChange}
          ></input>
        </div>
        <button className="submit-button mx-auto" onClick={handleSubmit}>
          Register
        </button>
        <p>
          Alredy an account?{" "}
          <button
            className="text-[#36c102] font-bold"
            onClick={() => navigate("/")}
          >
            Login
          </button>
        </p>
        {alert && <p className="text-red-700">{alert}</p>}
      </form>
    </div>
  );
}

export default Register;
