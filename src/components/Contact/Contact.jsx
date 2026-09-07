import "./Contact.css";

function Contact() {
  return (
    <section id="contact"  className="contact">

      <h2>Get In Touch</h2>

      <p className="contact-intro">
        I'm currently looking for opportunities to start my career
        as a Python Full Stack Developer. Feel free to connect with me.
      </p>

      <div className="contact-container">

        {/* Email */}
        <div className="contact-card">

          <h3>Email</h3>

          <p>Feel free to reach out to me via email.</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=praveenasenthilkumar340@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="email-button"
          >
            Send Email
          </a>

        </div>


        {/* LinkedIn */}
        <div className="contact-card">
          <h3>LinkedIn</h3>

          <p>Let's connect and grow professionally.</p>

          <a
            href="https://www.linkedin.com/in/praveena-s-1a894a281/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>

        </div>


        {/* GitHub */}
        <div className="contact-card">

          <h3>GitHub</h3>

          <p>Explore my projects and source code.</p>

          <a
            href="https://github.com/Praveena-Senthilkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;