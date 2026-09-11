"use client";
import { useState, useEffect } from "react";
import "./styles/NavBar.css";

export default function Nav() {
  const [Active, setActive] = useState("home");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };
    const main = document.querySelector("main");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        if (id === "skills") {
          setActive("about");
        } else {
          setActive(id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("main > div");

    sections.forEach((section) => observer.observe(section));

  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" id="top">
        <div className="navbar-brand" href="#" id="title">
          John Adel
          <span>— CS × AI</span>
        </div>
        <div id="av">
          <span></span>
          <p>OPEN TO INTERNSHIPS & ENTRY ROLES</p>
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
            >
              00 Home
            </a>
            <a
              className={`nav-link ${Active === "about" ? "active" : ""}`}
              href="#about"
            >
              {" "}
              01 About
            </a>
            <a
              className={`nav-link ${Active === "projects" ? "active" : ""}`}
              href="#projects"
            >
              02 Projects
            </a>
            <a
              className={`nav-link ${Active === "contact" ? "active" : ""}`}
              href="#contact"
            >
              03 Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
