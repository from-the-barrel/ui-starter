import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
// import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "/FTB_BLACK.svg";

const App = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const correctPassword = "applebees";

  if (!authenticated) {
    return (
      <div
        className="hero-box"
        style={{ textAlign: "center", padding: "50px" }}
      >
        <img src={logo} alt="Logo" className="hero-logo" />
        <div style={{ fontSize: "20px", paddingTop: "20px" }}>
          Website coming soon!
        </div>
        <div style={{ marginTop: "20px" }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={{ padding: "8px", fontSize: "16px" }}
          />
          <button
            onClick={() => {
              if (password === correctPassword) setAuthenticated(true);
              else alert("Incorrect password");
            }}
            style={{ marginLeft: "10px", padding: "8px 16px" }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <div
        style={{
          paddingTop: "70px",
          padding: "30px",
          color: "white",
          backgroundColor: "#000",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
