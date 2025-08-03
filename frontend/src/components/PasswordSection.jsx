import { useState } from "react";
import codetantraLogo from "../assets/codetantra_logo.png";

const PasswordSection = ({ onAuthenticate }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === "") {
      alert("Please enter a password");
      return;
    }
    onAuthenticate(password);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={codetantraLogo} alt="CodeTantra Logo" />
        NFC System
      </div>
      <h2>Admin Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Continue
        </button>
      </form>
    </div>
  );
};

export default PasswordSection;
