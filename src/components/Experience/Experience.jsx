import "./Experience.css";

const experiences = [
  {
    company: "CodTech IT Solutions",
    role: "DevOps Intern",
    duration: "2025",
    description:
      "Worked on CI/CD pipelines, Docker containerization, Kubernetes deployment, Git version control and Jenkins automation.",

    certificate:
      "YOUR_INTERNSHIP_CERTIFICATE_LINK",
  },
  {
    company: "Rise - Tamizhan Skills",
    role: "Web Developer Intern",
    duration: "2025",
    description:
      "Assisted in developing and maintaining company websites using HTML, CSS, and JavaScript.",
    certificate:
      "YOUR_INTERNSHIP_CERTIFICATE_LINK",
  }
];

function Experience() {
  return (
    <section id="experience" className="experience">

      <h2>Experience</h2>

      <div className="experience-container">

        {experiences.map((exp) => (

          <div className="experience-card" key={exp.company}>

            <h3>{exp.role}</h3>

            <h4>{exp.company}</h4>

            <span>{exp.duration}</span>

            <p>{exp.description}</p>

            <a
              href={exp.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-certificate"
            >
              View Certificate
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;