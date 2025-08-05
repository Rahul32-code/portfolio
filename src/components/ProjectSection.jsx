import { ArrowRight, ExternalLink, Github } from "lucide-react";
import mern_basic_crud from "../assets/project/mern_basic_crud.png";

const Projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Basic MERN CRUD Application.",
    image: mern_basic_crud,
    tags: ["tag1", "tag2", "tag3"],
    demoUrl: "https://mern-basic-crud-kypo.onrender.com/",
    githubUrl: "https://github.com/Rahul32-code/MERN_BASIC_CRUD",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    image: "projects/project2.jpg",
    tags: ["tag1", "tag2"],
    demoUrl: "https://example.com/project2",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    image: "projects/project3.jpg",
    tags: ["tag2", "tag3"],
    demoUrl: "https://example.com/project3",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of Project 4",
    image: "projects/project4.jpg",
    tags: ["tag1", "tag4"],
    demoUrl: "https://example.com/project4",
    githubUrl: "#",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A Showcase Of The Projects I Have Worked On, Highlighting my Skills And Experience In Various Technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="View source code on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="flex justify-center items-center mt-12">
          <a
            href="https://github.com/rahulgupta2002"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit flex items-center gap-2"
          >
            Check My GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
