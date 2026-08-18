import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Version Control with Git",
    issuer: "Coursera",
    description:
      "Learned Git fundamentals, version control concepts, branching, merging and collaboration.",
    link: "#",
  },
  {
    id: 2,
    title: "Linux Foundation LFS101",
    issuer: "Linux Foundation",
    description:
      "Completed Linux fundamentals covering command-line operations, files, permissions and basic system administration.",
    link: "#",
  },
  {
    id: 3,
    title: "Azure Fundamentals AZ-900",
    issuer: "Microsoft",
    description:
      "Completed Azure fundamentals covering cloud concepts, core services, security, privacy, compliance and pricing.",
    link: "#",
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    description:
        "Gained foundational knowledge of AWS cloud services, architecture, security, networking and pricing models.",
    link: "#",
  }
];

function Certifications() {
  return (
    <section className="certifications">

      <h2>Certifications</h2>

      <div className="certifications-container">

        {certifications.map((certificate) => (

          <div
            key={certificate.id}
            className="certificate-card"
          >


            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <p>{certificate.description}</p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;