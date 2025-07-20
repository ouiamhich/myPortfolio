import React from "react";
import { ArrowRight } from "lucide-react";
import { scrollToElement } from "../../utils/scrollUtils";
import "./Hero.css";

const Hero: React.FC = () => {
    const phrases = [
        "Developing Mobile Apps with React Native",
        "Integrating APIs Seamlessly",
        "Optimizing SEO & Performance",
        "Delivering Features in Agile Teams"
    ];
    const [text, setText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [phraseIndex, setPhraseIndex] = React.useState(0);
    const [delta, setDelta] = React.useState(200 - Math.random() * 100);
    const [cursorVisible, setCursorVisible] = React.useState(true);

    React.useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, isDeleting, phraseIndex, delta]);

    React.useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    const tick = () => {
        const currentPhrase = phrases[phraseIndex];
        const updatedText = isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(30);
        }

        if (!isDeleting && updatedText === currentPhrase) {
            setDelta(2000);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            setDelta(500);
        } else if (isDeleting) {
            setDelta(30);
        } else {
            setDelta(200 - Math.random() * 100);
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const sectionId = href.replace('#', '');
        scrollToElement(sectionId);
    };

    return (
        <section id="home" className="hero-section">
            <div className="bg-circle bg-circle-primary"></div>
            <div className="bg-circle bg-circle-accent"></div>
            <div className="bg-circle bg-circle-ocean"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-header">
                        <p className="hero-greeting">Hello, I'm</p>
                        <h1 className="hero-title">
                            <span className="hero-text">Ouiam - Fullstack/Frontend Engineer (CSM®)</span>
                            <br />
                            <span className="typewriter">
                                <span>{text}</span>
                                <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
                            </span>
                        </h1>
                        <p className="hero-description">
                            I build scalable and interactive web and mobile applications using React.js, Next.js, and React Native. I specialize in integrating APIs and optimizing for performance and SEO. Passionate about turning ideas into seamless digital experiences, I thrive in Agile environments and have hands-on experience in cross-functional Scrum teams. I recently obtained my Certified Scrum Master (CSM) certification to further enhance my ability to facilitate collaboration and deliver high-value projects.
                        </p>
                    </div>
                    <div className="hero-buttons">
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, "#projects")}
                            className="btn btn-primary"
                        >
                            View My Work
                            <ArrowRight className="btn-icon" />
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className="btn btn-outline"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="scroll-down">
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, "#about")}
                            className="scroll-link"
                        >
                            <span>Scroll down</span>
                            <svg
                                className="scroll-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
