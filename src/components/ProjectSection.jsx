import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import mern_basic_crud from "@/assets/project/mern_basic_crud.png";
import landingpage from "@/assets/project/landingpage.jpeg";
import thirdPartyApi from "@/assets/project/thirdPartyApi.png";
import qrGenrator from "@/assets/project/qrGenrator.png";
import cncares from "@/assets/project/cncares.png";
import indianails from "@/assets/project/indianails.png";
import RockyPay from "@/assets/project/rockypay.png";
import samtech from "@/assets/project/samtech.png";
import typing from "@/assets/project/typing.png";
import spotify from "@/assets/project/spotify.png";
import modernWeb from "@/assets/project/modern-web.png";

const Projects = [
  {
    id: 1,
    title: "Basic CRUD Application",
    description:
      "A full-stack MERN application for seamless data management with create, read, update, and delete functionality.",
    image: mern_basic_crud,
    tags: ["backend"],
    demoUrl: "https://mern-basic-crud-kypo.onrender.com/",
    githubUrl: "https://github.com/Rahul32-code/MERN_BASIC_CRUD",
  },
  {
    id: 2,
    title: "React Landing Page",
    description:
      "A sleek, responsive React landing page designed with Tailwind CSS for fast styling and Lucide React icons for a modern touch.",
    image: landingpage,
    tags: ["frontend"],
    demoUrl: "https://abhishekservice.abhishekdm.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "NEWS Api",
    description:
      "A React app that fetches and displays data from a third-party API in real-time.",
    image: thirdPartyApi,
    tags: ["frontend"],
    demoUrl: "https://newsapp-1tl4.onrender.com",
    githubUrl: "https://github.com/Rahul32-code/newsapp",
  },
  {
    id: 4,
    title: "Qrcode Generator",
    description:
      "A html css js app that fetches and displays data from a third-party API in real-time.",
    image: qrGenrator,
    tags: ["frontend"],
    demoUrl: "https://qr-code-genrator-iota.vercel.app",
    githubUrl: "https://github.com/Rahul32-code/qrCodeGenrator",
  },
  {
    id: 5,
    title: "CN CARES",
    description:
      "A single-vendor website with an admin panel built using PHP, designed for managing content and backend operations efficiently.",
    image: cncares,
    tags: ["backend"],
    demoUrl: "https://cncares.in/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Indianails",
    description:
      "A single-vendor website with an admin panel built using PHP, designed for managing content and backend operations efficiently.",
    image: indianails,
    tags: ["backend"],
    demoUrl: "https://indianails.com/",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "RockyPay",
    description:
      "A PHP-based payment gateway platform with dashboard, supporting single and bulk payouts for seamless transaction management.",
    image: RockyPay,
    tags: ["backend"],
    demoUrl: "https://rockypay.com/",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Samtech",
    description:
      "A PHP-based backend for selling courses with student login functionality and secure access to course content.",
    image: samtech,
    tags: ["backend"],
    demoUrl: "https://samtechcomputers.in/",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Typing",
    description:
      "A typing test tool using HTML, CSS, and JavaScript that compares user input with the original text, highlighting correct, incorrect, missing, and extra words with punctuation-aware accuracy.",
    image: typing,
    tags: ["frontend"],
    demoUrl: "https://typingmaster-jjc0.onrender.com/",
    githubUrl: "https://github.com/Rahul32-code/typingMaster",
  },
  {
    id: 10,
    title: "🎵 Spotify Clone – HTML, CSS, JavaScript",
    description:
      "A sleek, responsive music player clone with song cards, play/pause controls, dynamic seekbar, and volume slider. Built with pure HTML, CSS, and JS — no libraries — delivering smooth UI and real-time audio interactions.",
    image: spotify,
    tags: ["frontend"],
    demoUrl: "https://spotifyclone.digitalway.in/",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Modern Website React",
    description:
"A Modern Website React is a dynamic, fast, and interactive website built using React.js, focused on reusable components and efficient rendering for smooth user experiences.",
    image: modernWeb,
    tags: ["frontend"],
    demoUrl: "https://mordern-website-two.vercel.app/",
    githubUrl: "https://github.com/Rahul32-code/mordern-website/tree/main",
  },
];

const categories = ["all","frontend", "backend"];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? Projects
      : Projects.filter((project) => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A Showcase Of The Projects I Have Worked On, Highlighting my Skills
          And Experience In Various Technologies.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-muted-foreground"
                  : "text-muted-foreground border-primary"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
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
            href="https://github.com/Rahul32-code"
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
