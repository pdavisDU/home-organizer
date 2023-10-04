import { useState } from "react";
import React from "react";
import axios from "axios";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error registering:", error.response.data);
    }
  };
  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
