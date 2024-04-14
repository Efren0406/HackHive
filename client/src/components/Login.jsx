import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const sendUser = async () => {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await res.json();
        localStorage.setItem("user", JSON.stringify(data));

        if (res.status != 200) {
          setAlert("Invalid Credentials");
        } else {
          navigate("/home");
          console.log(data);
        }
      };
      sendUser();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form className="border p-6 rounded-md flex flex-col gap-2">
        <h1 className="font-bold text-2xl mb-2 text-center">Login</h1>
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
          Login
        </button>
        <div className="flex gap-2">
          <p>Don´t have an account?</p>
          <button
            className="text-[#36c102] font-bold"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
        {alert && <p className="text-red-700">{alert}</p>}
      </form>
    </div>
  );
}

export default Login;
