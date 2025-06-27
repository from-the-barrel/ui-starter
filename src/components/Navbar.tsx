import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/FTB_WHITE.svg";
import "./Navbar.css"; // 🔥 Add this

const links = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
  { path: "/releases", label: "releases" },
  { path: "/contact", label: "contact" },
];

const activeColor = "#ff4c4c";
const hoverColor = "#ff6666";

interface UnderlineStyle {
  left: number;
  width: number;
}

const Navbar = () => {
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState<UnderlineStyle>({
    left: 0,
    width: 0,
  });

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
    <div className="navbar-container">
      <div className="navbar-inner">
        <nav ref={navRef} className="navbar-nav">
          <ul className="navbar-links">
            {links.map(({ path, label }, index) => {
              const isActive = location.pathname === path;

              return (
                <React.Fragment key={path}>
                  <li>
                    <Link
                      to={path}
                      className={`navbar-link ${isActive ? "active" : ""}`}
                    >
                      {label}
                    </Link>
                  </li>
                  {index < links.length - 1 && (
                    <li aria-hidden className="navbar-separator">
                      /
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ul>

          <span
            className="navbar-underline"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
