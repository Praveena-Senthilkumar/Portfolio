import "./Achievements.css";

const achievements = [
  {
    id: 1,
    title: "Hackathon Participation",
    description:
      "Participated in technical hackathons and collaborated with team members to develop innovative solutions.",
  },
  {
    id: 2,
    title: "Farm Pulse Project",
    description:
      "Developed an AI-powered livestock health application for disease detection and nutrition recommendations.",
  },
  {
    id: 3,
    title: "DevOps Internship",
    description:
      "Worked on practical DevOps projects involving Git, Jenkins, Docker, Kubernetes and CI/CD practices.",
  },{
    id: 4,
    title: "Hindi Language Certification",
    description: "Hindi Language Certification - Dakshina Bharat Hindi Prachar Sabha (DBHPS).Completed 8 levels from Prathamic to Praveen Uttaradh, demonstrating proficiency in Hindi reading, writing, and communication."
  }
];

function Achievements() {
  return (
    <section className="achievements">

      <h2>Achievements</h2>

      <div className="achievements-container">

        {achievements.map((achievement) => (

          <div
            className="achievement-card"
            key={achievement.id}
          >

            <h3>{achievement.title}</h3>

            <p>{achievement.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;