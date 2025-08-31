import React from "react";
import zine1pdf from "/1-revolutionary-change-in-africa-VIEW.pdf";

const ZineOne: React.FC = () => {
  const pdfUrl = zine1pdf;

  const openPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
      }}
    >
      {/* Left Half - Image */}
      <div
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1a1a",
        }}
      >
        <img
          src="/ftbzine1.png"
          alt="Zine #1 Cover"
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
            borderRadius: "8px",
            boxShadow: "0 8px 32px rgba(230, 57, 70, 0.2)",
          }}
        />
      </div>

      {/* Right Half - Content */}
      <div
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "60px",
          boxSizing: "border-box",
        }}
      >
        {/* Back Button */}
        <a
          href="#/releases"
          style={{
            color: "#e63946",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          ← Back to Releases
        </a>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Astroph Rough'",
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: "700",
            color: "#e63946",
            letterSpacing: "3px",
            margin: "0 0 24px 0",
            lineHeight: "1.1",
          }}
        >
          ZINE #1
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "18px",
            color: "#999",
            margin: "0 0 40px 0",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
        >
          August 2025 • FROM THE BARREL
        </p>

        {/* Description */}
        <div
          style={{
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#ccc",
              margin: "0 0 24px 0",
              maxWidth: "500px",
            }}
          >
            Description goes here.
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          {/* Read PDF Button */}
          <button
            onClick={openPDF}
            style={{
              backgroundColor: "#e63946",
              color: "white",
              padding: "16px 32px",
              border: "none",
              borderRadius: "6px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              letterSpacing: "1px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#d63031";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e63946";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            FREE PDF
          </button>

          {/* Download Button */}
          <a
            href={pdfUrl}
            download="From_The_Barrel_Zine_1.pdf"
            style={{
              color: "#e63946",
              textDecoration: "none",
              padding: "16px 32px",
              border: "2px solid #e63946",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              letterSpacing: "1px",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e63946";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#e63946";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            DOWNLOAD
          </a>
        </div>

        {/* Additional Info */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px 0",
            borderTop: "1px solid #333",
            width: "100%",
            maxWidth: "500px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ZineOne;
