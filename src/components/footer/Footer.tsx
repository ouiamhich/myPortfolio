import React from "react";
import { Linkedin, Mail } from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">Ouiam</div>
          <p className="footer-tagline">
            Frontend Engineer passionate about building performant, elegant web applications with React, Next.js, and modern UI tools.
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "8px" }}>
            <a
              href="https://www.linkedin.com/in/ouiam-hichour/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:ouiamhich@gmail.com" className="footer-link">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <nav className="footer-nav">
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#skills" className="footer-link">
            Skills
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </nav>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ouiam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
