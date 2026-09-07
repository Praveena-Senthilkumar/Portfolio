import "./Certifications.css";
import azurecertificate from "../../assets/azure.png";

const certifications = [
  {
    id: 1,
    title: "Fundamentals of Full Stack Web Development",
    issuer: "KGISL - Coursera",
    description:
      "Learned the fundamentals of full stack web development, including front-end and back-end technologies, databases, and deployment.",
    link: "https://coursera.org/share/8c9b72c609b6749deae732486f757f7f",


}, {
    id: 2,
    title: "Azure Fundamentals AZ-900",
    issuer: "Microsoft",
    description:
      "Completed Azure fundamentals covering cloud concepts, core services, security, privacy, compliance and pricing.",
    link: azurecertificate,
  },
  {
    id: 3,
    title: "Introduction to Microsoft Azure and cloud services",
    issuer: "Microsoft - Coursera",
    description:"Gained foundational knowledge of Microsoft Azure, cloud computing concepts, and core services.",
    link: "https://coursera.org/share/ad32befacecaf1633daa9ab5c9b594ad",
  },
  {
    id: 4,
    title: "Linux Foundation LFS101",
    issuer: "Linux Foundation",
    description:
      "Completed Linux fundamentals covering command-line operations, files, permissions and basic system administration.",
    link: "https://www.credly.com/badges/2d0bf6f7-e187-46c9-a42f-3b79e641240c/public_url",
  },
 
  {
    id: 5,
    title: "Deployment and DevOps",
    issuer: "Microsoft - Coursera",
    description:" Learned DevOps practices, CI/CD pipelines, containerization with Docker, and deployment strategies.",
    link: "https://www.coursera.org/account/accomplishments/verify/4DFL0HJ6SQWR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },{
    id: 6,
    title: "Application Security for Developers and DevOps Professionals",
    issuer: "IBM- Coursera",
    description:"Learned application security best practices, secure coding techniques, and vulnerability management in DevOps workflows.",
    link:"https://coursera.org/share/2baacc5c0c740b6bb5a8dbabfc27d09a"
  },
  {
    id: 7,
    title: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services Training and Certification",
    description:"Learned the fundamentals of generative AI, including its applications, models, and ethical considerations.",
    link:"https://www.credly.com/badges/ffcdb892-bb50-4cc3-924c-d40721508900/public_url"
  },
  {
    id: 8,
    title: "Building AI-Powered Search with MongoDB Vector Search",
    issuer: "MongoDB University",
    description:"Learned how to build AI-powered search applications using MongoDB's vector search capabilities, including indexing and querying vector data.",
    link:"https://www.credly.com/badges/bfb16d32-1183-40be-b588-af97095be70f/public_url"
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