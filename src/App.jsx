import "./App.css";

function App() {
  const projects = [
    {
      title: "TaskForge",
      status: "Deployed",
      desc: "A fullstack task and project management app with JWT authentication, protected routes, team-based organization, and Chart.js reports.",
      tech: ["React", "Vite", "JWT Auth", "Node.js", "Express", "MongoDB"],
      codeUrl: "https://github.com/patilVikrant/taskForge",
      demoUrl: "https://task-forge-fawn.vercel.app/login",
      image: "https://i.ibb.co/6JqZTKCq/task-Forge-Home-Page.png",
    },
    {
      title: "Axentra CRM App",
      status: "Deployed",
      desc: "A fullstack CRM application with lead and sales agent management with interactive analytics.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      codeUrl: "https://github.com/patilVikrant/axentra-crmApp-frontend",
      demoUrl: "https://axentra-crm-app-frontend.vercel.app/",
      image: "https://i.ibb.co/mVp5kz3b/axentra-img.png",
    },
    {
      title: "BookCart E-Commerce App",
      status: "Deployed",
      desc: "A fullstack e-commerce application with product listing, cart, wishlist and order management.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      codeUrl: "https://github.com/patilVikrant/bookCart-ecommerceApp-frontend",
      demoUrl: "https://book-cart-ecommerce-app-frontend.vercel.app/",
      image: "https://i.ibb.co/KjYKFpkW/book-Cart-img.png",
    },
  ];

  const skillGroups = [
    {
      label: "Frontend",
      items: [
        "React",
        "React Router DOM",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Chart.js",
      ],
    },
    {
      label: "Backend",
      items: ["Node.js", "Express", "JWT-based Authentication", "REST APIs"],
    },
    {
      label: "Database",
      items: ["MongoDB", "Mongoose"],
    },
    {
      label: "Tools",
      items: ["Git", "GitHub", "Postman", "Vercel"],
    },
  ];

  return (
    <div className="bp-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-blueprint sticky-top py-2">
        <div className="container">
          <a className="navbar-brand" href="#home">
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
                rel="noreferrer"
                className="btn btn-blueprint-amber px-3 py-2 ms-lg-2"
              >
                Blog
              </a>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero */}
      <section id="home" className="hero-blueprint position-relative">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="hero-hi">Hi, I&apos;m</p>
              <h1 className="hero-name">Vikrant Patil</h1>
              <p className="hero-role">Full Stack Developer — MERN</p>

              <p className="hero-pitch">
                Full-stack developer building complete web applications with
                React, Node.js, and MongoDB — from RESTful APIs, database
                modeling and authentication to a polished, responsive frontend.
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <a
                  href="#projects"
                  className="btn btn-blueprint-amber px-4 py-2"
                >
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1rgGUS1GF4IGVzop99l4j6OlScwJoeSZ1/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-blueprint-light px-4 py-2"
                >
                  RESUME
                </a>
              </div>

              <p className="stack-strip mt-5">
                React · Node.js · Express · MongoDB · JWT Auth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="section-paper">
        <div className="container">
          <h2 className="section-title mb-5">Projects</h2>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <div className="spec-card h-100 d-flex flex-column">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="spec-card-img"
                  />

                  <div className="p-3 d-flex flex-column flex-grow-1">
                    <p className="spec-status mb-2">
                      <span className="dot" />
                      Status: {project.status}
                    </p>

                    <h4 className="spec-title mb-2">{project.title}</h4>

                    <p className="spec-desc mb-3">{project.desc}</p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((item) => (
                        <span key={item} className="tech-tag">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-blueprint-amber btn-sm flex-grow-1"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-blueprint btn-sm flex-grow-1"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="section-paper-alt">
        <div className="container">
          <h2 className="section-title mb-5">Skills</h2>

          {skillGroups.map((group) => (
            <div className="skills-row row align-items-start" key={group.label}>
              <div className="col-sm-3 col-lg-2">
                <p className="skills-label mb-2 mb-sm-0">{group.label}</p>
              </div>
              <div className="col-sm-9 col-lg-10">
                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="section-blueprint-dark">
        <div className="container">
          <h2 className="section-title-light mb-2">
            Let&apos;s build something
          </h2>
          <p className="hero-pitch mb-5">
            Open to full-stack developer roles. Reach out through any of these.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <a
                href="mailto:pvikrant248@gmail.com"
                className="contact-card d-block text-decoration-none"
              >
                <i className="bi bi-envelope-fill contact-icon"></i>
                <h4 className="contact-title">Email</h4>
                <p className="contact-value">pvikrant248@gmail.com</p>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://www.linkedin.com/in/vikrant-patil-4aa26011b/"
                target="_blank"
                rel="noreferrer"
                className="contact-card d-block text-decoration-none"
              >
                <i className="bi bi-linkedin contact-icon"></i>
                <h4 className="contact-title">LinkedIn</h4>
                <p className="contact-value">in/vikrant-patil</p>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://github.com/patilVikrant"
                target="_blank"
                rel="noreferrer"
                className="contact-card d-block text-decoration-none"
              >
                <i className="bi bi-github contact-icon"></i>
                <h4 className="contact-title">GitHub</h4>
                <p className="contact-value">patilVikrant</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
