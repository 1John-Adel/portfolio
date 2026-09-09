"use client";
import { useState } from "react";
import "./styles/NavBar.css";
import Image from "next/image";

export default function Nav() {
  const [Active, setActive] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" id="top">
        <div className="navbar-brand" href="#" id="title">
          John Adel
          <span>— CS × AI</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <section>
            <div></div>
            <div className="red"></div>
            <div></div>
          </section>
          [ Menu ]
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" id="nav_links">
            <a
              className={`nav-link ${Active === "home" ? "active" : ""}`}
              aria-current="page"
              href="#home"
              onClick={() => setActive("home")}
            >
              00 Home
            </a>
            <a
              className={`nav-link ${Active === "about" ? "active" : ""}`}
              href="#about"
              onClick={() => setActive("about")}
            >
              {" "}
              01 About
            </a>
            <a
              className={`nav-link ${Active === "project" ? "active" : ""}`}
              href="#projects"
              onClick={() => setActive("project")}
            >
              02 Projects
            </a>
            <a
              className={`nav-link ${Active === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => setActive("contact")}
            >
              03 Contact
            </a>
          </div>
        </div>
        <div id="av">
          <span></span>
          <p>AVAILABLE FOR SELECT ROLES</p>
        </div>
      </div>
    </nav>
  );
}
