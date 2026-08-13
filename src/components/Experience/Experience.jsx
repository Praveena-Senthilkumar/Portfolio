import "./Experience.css";

const experiences = [
  {
    company: "CodTech IT Solutions",
    role: "DevOps Intern",
    duration: "2025",
    description:
      "Worked on CI/CD pipelines, Docker containerization, Kubernetes deployment, Git version control and Jenkins automation."
  }
];

function Experience() {
  return (
    <section className="experience">

      <h2>Experience</h2>

      <div className="experience-container">

        {experiences.map((exp) => (

          <div className="experience-card" key={exp.company}>

            <h3>{exp.role}</h3>

            <h4>{exp.company}</h4>

            <span>{exp.duration}</span>

            <p>{exp.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;