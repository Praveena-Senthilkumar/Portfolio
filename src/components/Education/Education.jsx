import "./Education.css";

function Education() {
  return (
    <section className="education">

      <h2>Education</h2>

      {/* B.Tech */}
      <div className="education-card">

        <h3>Bachelor of Technology (B.Tech.)</h3>

        <h4>Information Technology</h4>

        <p>KGiSL Institute of Technology</p>
        <p>Coimbatore, Tamil Nadu</p>

        <span>2023 - 2027</span>

        <p className="cgpa">
          CGPA: 8.7
        </p>

      </div>

      {/* School */}
      <div className="education-card">

        <h3>Higher Secondary Education (HSC)</h3>

        <h4>Computer Science</h4>

        <p>GSR Matriculation Higher Secondary School</p>
        <p>Coimbatore, Tamil Nadu</p>

        <span>2022 - 2023</span>

        <p className="cgpa">
          Percentage: 94.6%
        </p>

      </div>

    </section>
  );
}

export default Education;