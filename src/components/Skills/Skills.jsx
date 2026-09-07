import "./Skills.css";
function Skills() {

    const skills = [
        "Python","Azure",
        "Java",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Git",
        "GitHub",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "AWS",
        "Linux"
    ];

    return (

        <section id="skills" className="skills">

            <h2>My Skills</h2>

            <div className="skills-container">

                {skills.map((skill) => (
                        <div key={skill} className="skill-card">
                          {skill}
             </div>
            ))}

            </div>

        </section>

    );

}

export default Skills;