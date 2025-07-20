import React from "react";
import { Code, CheckCircle } from "lucide-react";
import "./Skills.css";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Code className="skills-category-icon" />,
    skills: [
      "React.js", "Next.js", "React Native",
      "TypeScript", "JavaScript",
      "HTML5", "CSS3",
      "Material UI", "Tailwind CSS",
      "Mobile-First Design"
    ]
  },
  {
    name: "Backend",
    icon: <Code className="skills-category-icon" />,
    skills: [
      "Node.js", "Express.js", "Strapi",
      "API Integration", "Data Handling",
      "Authentication",
      "MySQL", "PostgreSQL", "MongoDB"
    ]
  },
  {
    name: "SEO",
    icon: <Code className="skills-category-icon" />,
    skills: [
      "SEO Best Practices",
      "Accessibility",
      "Google Analytics", "Tag Manager", 
      "Search Console", "Schema Markup","Structured Data",
    ]
  },
  {
    name: "Tools & Platforms",
    icon: <Code className="skills-category-icon" />,
    skills: [
      "Git/GitHub",
      "VS Code",
      "Jest","React Testing Library",
      "Docker", "Vite",
      "Vercel"
    ]
  }
];


  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="magic-text">
            My <span className="magic-text">Skills</span>
          </h2>
          <p className="skills-desc">
            I've worked with a variety of technologies in the web development world.
            Here's a snapshot of my technical expertise.
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="skills-card"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="skills-card-header">
                <div className="skills-card-icon">{category.icon}</div>
                <h3 className="skills-card-title">{category.name}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill} className="skills-list-item">
                    <CheckCircle className="skills-list-check" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-focus-outer">
          <div className="skills-focus">
            <h3 className="skills-focus-title">Current Focus</h3>
            <div className="skills-focus-list">
              {["Next.js 14", "React.js", "Tailwind CSS", "TypeScript", "MUI", "API integration"].map((tech) => (
                <span key={tech} className="skills-focus-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
