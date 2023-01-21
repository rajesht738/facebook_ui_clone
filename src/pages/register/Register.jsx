import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // console.log(inputs);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/registration", inputs);
    } catch (error) {
      setErr(error.response.data);
    }
    };
// console.log(err);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit{" "}
          </p>
          <span>Do you have an account!</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              id=""
              placeholder="username"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id=""
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id=""
              placeholder="password"
            />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id=""
              placeholder="name"
            />
            
        {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
