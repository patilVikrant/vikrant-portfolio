function App() {
  const projects = [
    {
      title: "bookCart E-Commerce App",
      desc: "A fullstack e-commerce application with product listing, cart, wishlist and order management.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      codeUrl: "https://github.com/patilVikrant/bookCart-ecommerceApp-frontend",
      demoUrl: "https://book-cart-ecommerce-app-frontend.vercel.app/",
      image: "https://i.ibb.co/KjYKFpkW/book-Cart-img.png",
    },
    {
      title: "axentra CRM App",
      desc: "A fullstack crm application with lead and sales agent management with interactive analytics.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      codeUrl: "https://github.com/patilVikrant/axentra-crmApp-frontend",
      demoUrl: "https://axentra-crm-app-frontend.vercel.app/",
      image: "https://i.ibb.co/mVp5kz3b/axentra-img.png",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Bootstrap",
    "Chart.js",
    "Vercel",
  ];
  return (
    <div className="bg-body-tertiary">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top py-2">
        <div className="container">
          <a className="navbar-brand fw-semibold fs-3" href="#home">
            Vikrant Patil
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <a
                href="https://jsdeepdive.hashnode.dev/"
                target="_blank"
                className="btn btn-primary px-4 rounded-3"
              >
                Blog
              </a>
            </ul>
          </div>
        </div>
      </nav>
      {/* main section */}
      <section id="home" className="py-3 bg-light">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="text-primary fw-semibold fs-4">Hi, I'm</p>

              <h1 className="fw-semibold mb-3">Vikrant Patil</h1>

              <h2 className="text-primary mb-4">Full Stack Developer</h2>

              <p className="lead text-secondary mb-4">
                Passionate full-stack developer building modern and responsive
                web applications with React, Node.js and MongoDB.
              </p>

              <div className="d-flex gap-3 flex-wrap mb-4">
                <a href="#contact" className="btn btn-primary px-4">
                  Contact Me
                </a>

                <a
                  href="https://drive.google.com/file/d/1rgGUS1GF4IGVzop99l4j6OlScwJoeSZ1/view?usp=sharing"
                  target="_blank"
                  className="btn btn-outline-dark px-4"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* projects section */}
      <section id="projects" className="py-3 bg-light">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="text-primary fw-bold">PROJECTS</p>
            <h2 className="fw-bold">My Projects</h2>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />

                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="fw-bold">{project.title}</h4>

                    <p className="text-secondary flex-grow-1">{project.desc}</p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="bg-primary-subtle text-primary px-3 py-2 fw-semibold rounded-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-3">
                      <a
                        href={project.demoUrl}
                        className="btn btn-outline-primary"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.codeUrl}
                        className="btn btn-outline-dark"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* skills section */}
      <section id="skills" className="py-3">
        <div className="container py-3 text-center">
          <p className="text-primary fw-bold">SKILLS</p>
          <h2 className="display-5 fw-bold mb-5">My Skills</h2>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white fw-semibold shadow-sm rounded-pill px-4 py-3"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact me section */}
      <section id="contact" className="py-3 bg-light">
        <div className="container py-3">
          <div className="text-center mb-5">
            <p className="text-primary fw-bold">CONTACT</p>
            <h2 className="display-5 fw-bold">Contact Me</h2>
            <p className="text-secondary mt-3">
              Feel free to reach out for collaborations or opportunities.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white shadow-sm rounded-4 p-4 h-100 text-center">
                <i
                  className="bi bi-envelope-fill mb-3 fs-1"
                  style={{ color: "#EA4335" }}
                ></i>

                <h4>Email</h4>

                <a
                  href="mailto:pvikrant248@gmail.com"
                  className="text-decoration-none text-secondary"
                >
                  pvikrant248@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white shadow-sm rounded-4 p-4 h-100 text-center">
                <i
                  className="bi bi-linkedin mb-3 fs-1"
                  style={{ color: "#0A66C2" }}
                ></i>

                <h4>LinkedIn</h4>

                <a
                  href="https://www.linkedin.com/in/vikrant-patil-4aa26011b/"
                  target="_blank"
                  className="text-decoration-none text-secondary"
                >
                  linkedin.com/in/vikrantpatil
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white shadow-sm rounded-4 p-4 h-100 text-center">
                <i
                  className="bi bi-github mb-3 fs-1"
                  style={{ color: "#171515" }}
                ></i>

                <h4>GitHub</h4>

                <a
                  href="https://github.com/patilVikrant"
                  target="_blank"
                  className="text-decoration-none text-secondary"
                >
                  github.com/patilVikrant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
