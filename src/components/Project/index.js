import React from "react";
import "./assets/scss/style.scss";

function Project() {
  const projects = [
    {
      name: "Nibbler",
      description:
        "A restaurant social media platform for finding, sharing, and exploring new food experiences.",
      githubName: "nibbler",
      technologies: [
        "Bcrypt",
        "Bootstrap",
        "Sass",
        "React",
        "Multer",
        "Node",
        "Express",
        "GraphQL",
        "MongoDB",
        "Mongoose",
        "Dotenv",
        "JWT",
        "Webpack",
      ],
    },
    {
      name: "Next Exit",
      description:
        "Next Exit is a blog platform that allows users to share their stories and experiences with the world.",
      githubName: "next-exit",
      technologies: [
        "CSS",
        "JavaScript",
        "Node",
        "Sequelize",
        "handlebars",
        "cloudinary",
      ],
    },
    {
      name: "Let's Tech About It",
      description:
        "A simple blog platform for developers to share and discuss their experiences with technology.",
      githubName: "lets-tech-about-it",
      technologies: [
        "JavaScript",
        "express-handlebars",
        "express-session",
        "MySQL",
        "Sequelize",
        "connect-session-sequelize",
        "bcrypt",
      ],
    },
    {
      name: "Budget Unlimited",
      description:
        "This PWA application allows users to track their expenses even with poor coverage, and not worry about losing data.",
      githubName: "budget-unlimited",
      technologies: ["JavaScript", "Manifest", "Service Worker", "indexedDB"],
    },
    {
      name: "Austin Date Night",
      description:
        "Don't know what to do? Austin Date Night will tell you what places or activities are the best in your area!",
      githubName: "austin-date-night",
      technologies: ["CSS", "JavaScript", "HTML"],
    },
    {
      name: "Team Builder",
      description:
        "A terminal application that prompts for information then builds HTML page that displays your team.",
      githubName: "team-builder",
      technologies: ["JavaScript", "Inquirer", "HTML", "CSS"],
    },
    {
      name: "JavaScript Quiz",
      description:
        "Test your knowledge with a short quiz over JavaScript fundamentals. Save your high scores and watch your progress grow!",
      githubName: "javascript-fundamentals-quiz",
      technologies: ["JavaScript", "HTML", "CSS", "localStorage"],
    },
  ];

  return (
    <div className="projects">
      <h1 className="mx-2">My Projects:</h1>
      <div className="project-list flex-column flex-md-row">
        {projects.map((project) => (
          <div className="project my-3" key={project.name}>
            <h2 className="mb-3">{project.name}</h2>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/millerchase/${project.githubName}`}
            >
              <div className="card img-fluid">
                <img
                  className="card-img-top card-background"
                  src={require(`./assets/images/${project.githubName}.png`)}
                  alt={project.name}
                  width="100%"
                />
                <div className="card-img-overlay">
                  <p className="px-2 py-1">{project.description}</p>
                  <div className="technologies px-2 py-1">
                    {project.technologies.map((technology) => (
                      <div className="technology" key={technology}>
                        {technology}/
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
