import "./Hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h3>Hello, I'm</h3>

        <h1>Praveena S</h1>

        <h2>Python Full Stack Developer</h2>

        <p>
          Passionate about building modern web applications,
          AI-powered solutions, and DevOps automation.
        </p>

        <button>Explore My Work</button>

        <button>Download Resume</button>

      </div>

      <div className="hero-image">

        <img
          src="https://via.placeholder.com/350"
          alt="Profile"
        />

      </div>

    </section>
  );
}

export default Hero;