import React from "react";
import habash from "/habash.png";
import ftb1 from "/ftbzine1.png";
import ftb2 from "/ftbzine2.png";

interface Release {
  title: string;
  date?: string;
  img?: string;
  pdf?: string;
  link?: string;
}

const releases: Release[] = [
  {
    title: "ZINE #1",
    date: "Revolutionary Change in Africa: An Interview With Samir Amin",
    img: ftb1,
    link: "#/releases/zine-1",
  },
  {
    title: "ZINE #2",
    date: `Reflections on Victor Serge's: "What Everyone Should Know About State Represssion"`,
    img: ftb2,
    link: "#/releases/zine-2",
  },
];

const Releases: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Astroph Rough'",
            fontSize: "clamp(32px, 8vw, 48px)",
            fontWeight: "700",
            color: "#e63946",
            letterSpacing: "3px",
            margin: "0",
          }}
        >
          RELEASES
        </h1>
      </div>

      {/* Releases Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px 60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            justifyItems: "center",
          }}
        >
          {releases.map(({ title, date, img, link }, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #333",
                transition: "all 0.3s ease",
                cursor: link ? "pointer" : "default",
                maxWidth: "280px",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                if (link) {
                  e.currentTarget.style.borderColor = "#e63946";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (link) {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              {link ? (
                <a
                  href={link}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "280px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        backgroundColor: "#1a1a1a",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "white",
                        margin: "0 0 8px 0",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {title}
                    </h3>
                    {date && (
                      <p
                        style={{
                          color: "#999",
                          fontSize: "14px",
                          margin: "0",
                        }}
                      >
                        {date}
                      </p>
                    )}
                  </div>
                </a>
              ) : (
                <>
                  <div
                    style={{
                      width: "100%",
                      height: "280px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      alt={title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        backgroundColor: "#1a1a1a",
                      }}
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "white",
                        margin: "0 0 8px 0",
                      }}
                    >
                      {title}
                    </h3>
                    {date && (
                      <p
                        style={{
                          color: "#999",
                          fontSize: "14px",
                          margin: "0",
                        }}
                      >
                        {date}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Releases;
