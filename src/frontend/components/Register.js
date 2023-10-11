import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/register", {
        username,
        password,
      });
      console.log(response.data);

      // Clear the input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      if (error.response) {
        console.error("Error registering:", error.response.data);
      } else {
        console.error("Error registering:", error.message);
      }
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
              type={showPassword ? "text" : "password"} // Toggle input type
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Icon/button to toggle password visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: "none", border: "none", cursor: "pointer" }} // Make it look like a typical icon button
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
