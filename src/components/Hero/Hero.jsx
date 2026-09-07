import "./Hero.css";
import resume from "../../assets/Praveena_resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <h3>Hello, I'm</h3>

        <h1>Praveena S</h1>
        <br />
        <h2>Python Full Stack Developer</h2>

        <p>
          Passionate about building modern web applications,
          AI-powered solutions, DevOps automation and Cloud computing.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button>Explore My Work</button>
          </a>

          <a href={resume} download="Praveena_S_Resume.pdf">
            <button>Download Resume</button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;