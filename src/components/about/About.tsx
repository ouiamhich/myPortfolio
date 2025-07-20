import React from "react";
import { User, Star, Award, Calendar } from "lucide-react";
import "./About.css";
import LazyImage from "../helpers/LazyImage";
import { IMAGE_PATHS } from "../../config/images";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-row">
          <div className="about-col">
            <div className="about-title-wrap">
              <h2 className="about-title">
                About Me
                <span className="about-title-underline"></span>
              </h2>
            </div>
            
            <p className="about-text">
              I’m a dedicated Fullstack Front-End Engineer with a passion for building high-performance, user-friendly web applications using React, Next.js, TypeScript, and modern UI frameworks like Tailwind CSS and Material UI. I excel at designing responsive, visually engaging interfaces and seamlessly integrating APIs to deliver dynamic, data-driven experiences.
            </p>
            
            <p className="about-text">
              Experienced in agile, cross-functional teams, I thrive on collaboration and problem-solving—whether optimizing performance, enhancing user experience, or ensuring maintainable, scalable code. I am always eager to learn new tools and contribute to innovative projects that create real value.
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
          
          <div className="about-col about-col-image">
            <div className="about-image-wrap">
              <div className="about-image-main">
                <LazyImage
                  src={IMAGE_PATHS.PROFILE.OUIAM}
                  alt="Harry - Full Stack Developer and Software Engineer"
                  className="about-img"
                  loading="eager"
                  placeholder="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkhhcnJ5PC90ZXh0Pjwvc3ZnPg=="
                />
              </div>
              <div className="about-image-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
