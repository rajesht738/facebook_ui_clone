import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
const Login = () => {
  const [inputs, setInputs] = useState({
    usename: "",
    password: "",
  });

  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolar sit Lorem ipsum dolar sit Lorem ipsum dolar sit{" "}
          </p>
          <span>Don't you have an account!</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              id=""
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              id=""
              placeholder="password"
            />
            <button onClick={handleClick}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
