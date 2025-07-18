import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
// import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Home></Home>
    // <Router>
    //   <Navbar />
    //   <div
    //     style={{
    //       paddingTop: "70px",
    //       padding: "30px",
    //       color: "white",
    //       backgroundColor: "#000",
    //       minHeight: "100vh",
    //     }}
    //   >
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
