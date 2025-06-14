import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./Home";
import Article1 from "./articles/Article1";
import Article2 from "./articles/Article2";
import Article4 from "./articles/Article4";
import Article5 from "./articles/Article5";
import Article6 from "./articles/Article6";
import Article7 from "./articles/Article7";
import Article8 from "./articles/Article8";
import Books from "./Books";

const App = () => {
  return (
    <Router>
      {" "}
      <Navbar />
      <div
        style={{
          padding: "40px",
          paddingLeft: "220px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article4" element={<Article4 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article5" element={<Article5 />} />
          <Route path="/article6" element={<Article6 />} />
          <Route path="/article7" element={<Article7 />} />
          <Route path="/article8" element={<Article8 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
