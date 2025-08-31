import React from "react";
import "./Home.css";
import "./global.css";
import logo from "/FTB_WHITE.svg";
import textless from "/textless_logo.png";
import habash from "/habash.png";
import ftb1 from "/ftbzine1.png";
import ftb2 from "/ftbzine2.png";
import { Document, Page } from "react-pdf";
import InstagramEmbed from "./components/InstagramEmbed";

interface Release {
  title: string;
  date?: string;
  img?: string;
  pdf?: string;
  link?: string;
}

const latestReleases: Release[] = [
  {
    title:
      "ZINE #1 - Revolutionary Change in Africa: An Interview With Samir Amin",
    img: ftb1,
    link: "#/releases/zine-1",
  },
];

const releases: Release[] = [
  {
    title: `ZINE #2 - Reflections on Victor Serge's: "What Everyone Should Know About State Represssion`,
    date: "Summer 2025",
    img: ftb2,
    link: "#/releases/zine-2",
  },
];

const instagramPosts = ["https://www.instagram.com/p/DL2z7MwO21j/?img_index=1"];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="hero-box">
          <h1 style={{ fontFamily: "'Astroph Rough'" }}>FROM THE BARREL</h1>
          <img src={textless} alt="Logo" className="hero-logo" />
          <div style={{ fontSize: "20px", paddingTop: "20px" }}></div>
        </div>
        <div className="content">
          <div className="releases-wrapper">
            <div className="releases-section">
              <h2>Latest Releases</h2>
              {latestReleases.map(({ title, date, img, link }, idx) => (
                <div className="release-item" key={`latest-${idx}`}>
                  {link ? (
                    <a href={link} className="release-link">
                      <img
                        src={img}
                        alt="Release Cover"
                        className="release-img"
                      />
                      <div>
                        <div>{title}</div>
                        <div>{date}</div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <img
                        src={img}
                        alt="Release Cover"
                        className="release-img"
                      />
                      <div>
                        <div>{title}</div>
                        <div>{date}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="releases-section">
              <h2>Upcoming Releases</h2>
              {releases.map(({ title, date, img, link }, idx) => (
                <div className="release-item" key={idx}>
                  {link ? (
                    <a href={link} className="release-link">
                      <img
                        src={img}
                        alt="Release Cover"
                        className="release-img"
                      />
                      <div>
                        <div>{title}</div>
                        <div>{date}</div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <img
                        src={img}
                        alt="Release Cover"
                        className="release-img"
                      />
                      <div>
                        <div>{title}</div>
                        <div>{date}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="instagram-section">
            <InstagramEmbed postUrls={instagramPosts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
