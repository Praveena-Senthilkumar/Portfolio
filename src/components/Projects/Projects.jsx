import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Farm Pulse",
    description:
      "AI-powered livestock health application for disease detection and nutrition recommendations.",
    technologies: ["Python", "TensorFlow", "Streamlit", "AI"],
    github: "https://github.com/Praveena-Senthilkumar/FARM-PULSE.git",
  },
  {
    id: 2,
    title: "Secure DevOps Practices with GitHub Actions and OWASP ZAP",
    description:
      "Integrated OWASP ZAP with GitHub Actions to automate vulnerability scanning in a Node.js CI/CD pipeline.",
    technologies: ["GitHub Actions", "OWASP ZAP", "Docker", "Node.js"],
    github:
      "https://github.com/Praveena-Senthilkumar/SECURE-DEVOPS-PRACTICES.git",
  },
  {
    id: 3,
    title: "Kubernetes Deployment",
    description:
      "Containerized applications using Docker and deployed them on Kubernetes clusters.",
    technologies: ["Docker", "Kubernetes", "YAML"],
    github:
      "https://github.com/Praveena-Senthilkumar/KUBERNETES-DEPLOYMENT.git",
  },
  {
    id: 4,
    title: "DevOps Case Study",
    description:
      "Implemented an end-to-end DevOps workflow including version control, CI/CD, containerization and deployment.",
    technologies: ["Git", "Jenkins", "Docker"],
    github:
      "https://github.com/Praveena-Senthilkumar/DEVOPS-CASE-STUDY.git",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;