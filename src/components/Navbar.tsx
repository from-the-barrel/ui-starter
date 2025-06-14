import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "to understand mariátegui" },
  { path: "/article4", label: "let us orient ourselves" },
  { path: "/article2", label: "let us disorient ourselves" },
  { path: "/article1", label: "the compromised image" },
  { path: "/article5", label: "compress and expand" },
  { path: "/article6", label: "transpacific revolution" },
  { path: "/article7", label: "dogsbody" },
  { path: "/article8", label: "reconstitute the image!" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "20px",
        paddingTop: "37px",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        width: "250px",
        display: "flex",
        flexDirection: "column",
        borderRight: "2px dotted grey",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyleType: "none",
          margin: 0,
          padding: 0,
          alignItems: "flex-end",
          fontStyle: "italic",
        }}
      >
        {links.map(({ path, label }) => (
          <li key={path} style={{ margin: "5px 0" }}>
            <Link
              to={path}
              style={{
                color: location.pathname === path ? "black" : "grey",
                textDecoration: "none",
                fontWeight: location.pathname === path ? "bold" : "normal",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
