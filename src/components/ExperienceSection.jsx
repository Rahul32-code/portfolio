const Experiences = [
  {
    id: 1,
    company: "TSSG Tech",
    position: "Full Stack Developer",
    date: "Mar 21, 2025 – Present",
    location: "Delhi | Nehru Place",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind",
      "Zustand",
      "Cloudinary",
      "PHP",
    ],
    responsibilities: [
      "Built a full-stack blogging platform with authentication and RESTful APIs.",
      "Implemented Cloudinary image uploads, Zustand state management, and CCAvenue payment gateway.",
      "Maintained dynamic PHP + MySQL applications for internal business needs. example:- E-commerce",
    ],
  },
  {
    id: 2,
    company: "Bhoomi TechZone Pvt Ltd",
    position: "Full Stack Developer",
    date: "Dec 1, 2024 – Mar 2025",
    location: "Noida",
    technologies: ["PHP", "MySQL", "JavaScript", "eCommerce"],
    responsibilities: [
      "Developed a responsive eCommerce website with product listing, cart, and checkout.",
      "Integrated admin panel features and backend order processing modules.",
    ],
  },
  {
    id: 3,
    company: "Speed Shed Technologies",
    position: "Full Stack Developer",
    date: "Sept 2023 – Nov 2024",
    location: "Gurgaon (Remote)",
    technologies: ["Node.js", "EJS", "MySQL", "RESTful API", "Git", "HTML/CSS"],
    responsibilities: [
      "Built internal web apps using EJS templating, Node.js backend, and REST APIs.",
      "Handled frontend design, backend logic, and version control using Git.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-secondary rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-xs text-glow text-primary font-semibold">
                  {exp.date}
                </p>
                <p className="text-xs text-muted-foreground">{exp.location}</p>
              </div>

              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-3">
                {exp.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs border rounded-full bg-background text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
