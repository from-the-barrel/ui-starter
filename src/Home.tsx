import React from "react";
import "./Home.css";
import "./global.css";
import logo from "/FTB_WHITE.svg";
import textless from "/textless_logo.png";
import habash from "/habash.png";
import { Document, Page } from "react-pdf";

interface Release {
  title: string;
  date: string;
  img?: string;
  pdf?: string; // pdf url or import
}

const releases: Release[] = [
  {
    title: "Selected Works of Dr. George Habash",
    date: "Fall 2025",
    img: habash,
  },
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="liberacion.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <div className="hero-box">
          <h1>FROM THE BARREL</h1>
          <img src={textless} alt="Logo" className="hero-logo" />
        </div>

        <div className="releases-section">
          <h2>Upcoming Releases</h2>
          {releases.map(({ title, date, img }, idx) => (
            <div className="release-item" key={idx}>
              <img src={img} alt="Release Cover" className="release-img" />
              <div>
                <div>{title}</div>
                <div>{date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
