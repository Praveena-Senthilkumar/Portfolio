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
  },
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