import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";
import "./projects.css";
import { projectsData, type ProjectData } from "../../data/projects";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    detailedDescription,
    tags,
    imageUrl,
    logo,
    githubUrl,
    featured = false,
    features,
    status,
    year,
    projectUrl
  } = project;

  const displayImage = logo || imageUrl;

  return (
    <div className={`project-card ${featured ? "featured" : ""}`}>
      <div className="card-inner">
        <div className="card-image-wrapper">
          <img src={displayImage} alt={title} />
          {featured && (
            <div className="badge featured-badge">
              <Star size={12} /> Featured
            </div>
          )}
          <div className="badge status-badge">
            {year} • {status.replace("-", " ")}
          </div>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p className="description">{detailedDescription}</p>

          {features && features.length > 0 && (
            <div className="features">
              <h4>Key Features:</h4>
              <ul>
                {features.slice(0, 3).map((feature, i) => (
                  <li key={i}>
                    <strong>{feature.title}</strong>{feature.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="actions">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="link">
              View Project <ExternalLink size={14} />
            </a>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Code <Github size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="magic-text">
            My <span className="magic-text">Projects</span>
          </h2>
          <p className="projects-desc">
            Explore my recent work and personal projects. Each one represents a
            unique challenge and learning opportunity.
          </p>
        </div>


        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
