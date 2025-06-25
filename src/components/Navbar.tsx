import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/FTB_WHITE.svg";

const links = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
  { path: "/releases", label: "releases" },
  { path: "/contact", label: "contact" },
];

const activeColor = "#ff4c4c";
const hoverColor = "#ff6666";
const navbarBg = "#000";

interface UnderlineStyle {
  left: number;
  width: number;
}

const Navbar = () => {
  const location = useLocation();
  // Initialize with zero values to avoid undefined usage
  const [underlineStyle, setUnderlineStyle] = useState<UnderlineStyle>({
    left: 0,
    width: 0,
  });

  // Specify the ref type as HTMLElement or null
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const activeLink = navRef.current.querySelector(
      `a[href="${location.pathname}"]`
    ) as HTMLElement | null;

    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    } else {
      setUnderlineStyle({
        left: 0,
        width: 0,
      });
    }
  }, [location.pathname]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: navbarBg,
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        fontFamily: "'Courier New', Courier, monospace",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "90px",
        boxShadow: "0 2px 8px rgba(255, 255, 255, 0.06)",
        userSelect: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          height: "100%",
          flexGrow: 1,
        }}
      >
        {/* Uncomment if you want the logo as home link */}
        {/* <Link
          to="/"
          style={{ height: "70%", display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "100%",
              width: "auto",
              objectFit: "contain",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </Link> */}

        <nav
          ref={navRef}
          style={{
            position: "relative",
            flexGrow: 1,
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              margin: 0,
              padding: 0,
              fontSize: "17px",
              fontWeight: "500",
              alignItems: "center",
            }}
          >
            {links.map(({ path, label }, index) => {
              const isActive = location.pathname === path;

              return (
                <React.Fragment key={path}>
                  <li
                    style={{
                      position: "relative",
                    }}
                  >
                    <Link
                      to={path}
                      style={{
                        color: isActive ? activeColor : "#eee",
                        textDecoration: "none",
                        fontWeight: isActive ? "bold" : "normal",
                        fontStyle: isActive ? "italic" : "normal",
                        transition: "color 0.3s ease, transform 0.3s ease",
                        paddingBottom: "4px",
                        display: "inline-block",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = hoverColor;
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.fontStyle = "italic";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = isActive
                          ? activeColor
                          : "#eee";
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.fontStyle = isActive
                          ? "italic"
                          : "normal";
                      }}
                    >
                      {label}
                    </Link>
                  </li>

                  {index < links.length - 1 && (
                    <li
                      aria-hidden
                      style={{
                        margin: "0 16px",
                        color: activeColor,
                        fontSize: "18px",
                        userSelect: "none",
                      }}
                    >
                      /
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>

          {/* Sliding underline */}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: underlineStyle.left,
              width: underlineStyle.width,
              height: "3px",
              backgroundColor: activeColor,
              borderRadius: "2px",
              transition: "left 0.3s ease, width 0.3s ease",
              boxShadow: `0 0 8px 2px ${activeColor}`,
            }}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
