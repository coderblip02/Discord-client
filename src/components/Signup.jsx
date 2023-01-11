import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const notification = toast.loading("Creating your account..");
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      toast.success("Account created successfully", {
        id: notification,
      });
      navigate("/");
    } catch (e) {
      toast.error("Whoop something went wrong ", {
        id: notification,
      });
      setError(e.message);
      console.log(e.message);
    }
    setEmail("");
    setPassword("");
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
          <h1>Welcome to Discord</h1>
          <p className="welcome-back">
            {" "}
            Hangout with Friends and Strangers on the Internet
          </p>
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
          <button type="submit">Sign up</button>
        </div>
        <div className="need-an-account">
          <p>
            Already have an account ? <Link to="/">Login</Link>
          </p>
        </div>
        <div className="login-image-2">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62a3426a21d01b590ba3c246_2.svg"
            alt=""
            className="login-display-image-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
