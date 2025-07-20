import React, { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, User, Mail, Code, GraduationCap } from "lucide-react";
import "./NavigationBar.css";
import { scrollToElement } from "../../utils/scrollUtils";

const NavigationBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const sectionId = href.replace('#', '');
        scrollToElement(sectionId);
        if (isOpen) setIsOpen(false);
    };

    const navLinks = [
        { name: "Home", icon: Home, href: "#home" },
        { name: "About", icon: User, href: "#about" },
        { name: "Education", icon: GraduationCap , href: "#education" },
        { name: "Skills", icon: Code, href: "#skills" },
        { name: "Projects", icon: Briefcase, href: "#projects" },
        { name: "Contact", icon: Mail, href: "#contact" },
    ];


    const scrolled = scrollPosition > 20;

    return (
        <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
            <div className="navbar-container">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                    className="navbar-logo"
                >
                    <span className="hero-text">Ouiam</span>
                </a>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="navbar-link"
                        >
                            <link.icon className="navbar-link-icon" />
                            {link.name}
                            <span className="navbar-link-underline"></span>
                        </a>
                    ))}
                </div>

                <div className="navbar-mobile-toggle">
                    <button
                        className="navbar-menu-btn"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="navbar-menu-icon" /> : <Menu className="navbar-menu-icon" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="navbar-mobile-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="navbar-mobile-link"
                        >
                            <link.icon className="navbar-mobile-icon" />
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
