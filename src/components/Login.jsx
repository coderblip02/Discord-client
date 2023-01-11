import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = UserAuth();

  const handleSubmit = async (e) => {
    const notification = toast.loading("Logging in..");
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      toast.success("Login Success", {
        id: notification,
      });
      navigate("/Main-server");
    } catch (e) {
      toast.error("Whoop something went wrong ", {
        id: notification,
      });
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-logo">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b544a3e3c7c05753bcd_full_logo_white_RGB.png"
            className="login-image"
            alt=""
          />
        </div>
        <div className="login-header-text">
          <h1>Welcome back</h1>
          <p className="welcome-back"> We're so excited to see you again</p>
        </div>

        <div className="login-input-box">
          <label>EMAIL</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="login-input-box-1">
          <label>PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>

        <div className="login-button">
          <button type="submit">Login</button>
        </div>
        <div className="need-an-account">
          <p>
            Dont have an account ? <Link to="/signup">Register</Link>
          </p>
        </div>
        <div className="login-image-1">
          <img
            src="https://assets-global.website-files.com/5f8dd67f8fdd6f51f0b50904/6169feb513e3a9215c4477e3_External_2021LoginPage_NPC-typing.png"
            alt=""
            className="login-display-image"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
