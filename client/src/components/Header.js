import React, { useState } from "react";
import { Link } from "react-router-dom";

//<img id="logo" src="NMPlogo.PNG"></img>
function Header() {
  const [route, setRoute] = useState("/");
  return (
    <header>
      <h1>
        <a href="/">
          The New Maps Project{" "}
          {window.location == "/visualizer" && (
            <span
              style={{ textShadow: "black 2px 2px 3px", color: "lightcoral" }}
            >
              Visualizer
            </span>
          )}
        </a>
      </h1>
      <ul>
        <li>
          <a href="/mission" className="no-box">
            Mission
          </a>
        </li>
        <li>
          <a href="/algorithm" className="no-box">
            {window.outerWidth > 1270 ||
            (window.outerWidth < 800 && window.outerWidth > 500)
              ? "The Algorithm"
              : "Algorithm"}
          </a>
        </li>
        <li>
          <a href="/visualizer">Visualize</a>
        </li>

        <li>
          <a href="/info" className="no-box">
            Info
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
