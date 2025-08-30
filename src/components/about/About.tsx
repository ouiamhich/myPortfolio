import React from "react";
import { User, Star, Award, Calendar } from "lucide-react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-row">
          <div className="about-col">
            <div className="about-title-wrap">
              <h2 className="about-title">
                About Me
              </h2>
            </div>
            
            <p className="about-text">
              I’m a dedicated Fullstack Front-End Engineer with a passion for building high-performance, user-friendly web applications using React, Next.js, TypeScript, and modern UI frameworks like Tailwind CSS and Material UI. I excel at designing responsive, visually engaging interfaces and seamlessly integrating APIs to deliver dynamic, data-driven experiences.
            </p>
            
            <p className="about-text">
              Experienced in agile, cross-functional teams, I thrive on collaboration and problem-solving—whether optimizing performance, enhancing user experience, or ensuring maintainable, scalable code. I am always eager to learn new tools and contribute to innovative projects that create real value.
            </p>

            <p className="about-text">
              Beyond coding, I care deeply about SEO optimization, accessibility, and performance best practices—ensuring that every project I work on not only looks great but also reaches the right audience and delivers measurable results. I recently earned my Certified Scrum Master (CSM®) credential, further strengthening my ability to foster collaboration, streamline processes, and contribute to a team’s success.
            </p>

            <p className="about-text">
              I’m continuously exploring new technologies, design patterns, and emerging trends to stay ahead in the fast-moving front-end ecosystem. My ultimate goal is to keep creating digital products that are both impactful and delightful for users.
            </p>
            
            <div className="about-stats-grid">
              {/* 1. Experience */}
              <div className="about-stat-item">
                <div className="about-stat-icon about-stat-primary">
                  <User className="about-icon" />
                </div>
                <div>
                  <h3 className="about-stat-title">Experience</h3>
                  <p className="about-stat-value">2.5 Years</p>
                </div>
              </div>
              {/* 2. Education */}
              <div className="about-stat-item">
                <div className="about-stat-icon about-stat-primary">
                  <Award className="about-icon" />
                </div>
                <div>
                  <h3 className="about-stat-title">Education</h3>
                  <p className="about-stat-value">Engineering Degree, ENSIAS</p>
                </div>
              </div>
              {/* 3. Projects */}
              <div className="about-stat-item">
                <div className="about-stat-icon about-stat-accent">
                  <Star className="about-icon" />
                </div>
                <div>
                  <h3 className="about-stat-title">Projects</h3>
                  <p className="about-stat-value">10+ Completed</p>
                </div>
              </div>
              {/* 4. Availability */}
              <div className="about-stat-item">
                <div className="about-stat-icon about-stat-accent">
                  <Calendar className="about-icon" />
                </div>
                <div>
                  <h3 className="about-stat-title">Availability</h3>
                  <p className="about-stat-value">Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
