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
          <a href="/news" class="no-box">
            News
          </a>
        </li>
        <li>
          <a href="/info" class="no-box">
            Info
          </a>
        </li>
        <li>
          <a href="/visualizer">Visualize</a>
        </li>
        <li>
          <a href="/gallery" class="no-box">
            Gallery
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
