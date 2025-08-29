import { useState } from "react";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import reactjs from "../assets/skills/reactjs.png";
import zustand from "../assets/skills/zustand.png"
import tailwind from "../assets/skills/tailwindcss.png";
import bootstrap from "../assets/skills/bootstrap.png";
import gsap from "../assets/skills/gsap.png";
import nodejs from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";
import mysql from "../assets/skills/mysql.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode.png";
import postman from "../assets/skills/postman.png";
import vercel from "../assets/skills/vercel.png";
import netlify from "../assets/skills/netlify.png";
import render from "../assets/skills/render.png";

const skills = [
  // frontend
  { name: "HTML", level: "95", category: "frontend", icon: html },
  { name: "CSS", level: "95", category: "frontend", icon: css },
  { name: "Javascript", level: "90", category: "frontend", icon: Javascript },
  { name: "React Js", level: "90", category: "frontend", icon: reactjs },
  { name: "Zustand", level: "80", category: "frontend", icon: zustand },
  { name: "Tailwind CSS", level: "90", category: "frontend", icon: tailwind },
  { name: "Bootstrap", level: "90", category: "frontend", icon: bootstrap },
  { name: "GSAP", level: "90", category: "frontend", icon: gsap },

  // backend
  { name: "Node Js", level: "80", category: "backend", icon: nodejs },
  { name: "Express Js", level: "75", category: "backend", icon: express },
  { name: "mySql", level: "80", category: "backend", icon: mysql },
  { name: "MongoDB", level: "70", category: "backend", icon: mongodb },
  { name: "Firebase", level: "60", category: "backend", icon: firebase },

  // tools
  { name: "Git", level: "90", category: "tools", icon: git },
  { name: "Github", level: "90", category: "tools", icon: github },
  { name: "VScode", level: "95", category: "tools", icon: vscode },
  { name: "PostMan", level: "85", category: "tools", icon: postman },
  { name: "Vercel", level: "85", category: "tools", icon: vercel },
  { name: "Netlify", level: "85", category: "tools", icon: netlify },
  { name: "Render", level: "85", category: "tools", icon: render },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A Collection Of My Technical Skills and Expertise Honed Through
          Various Projects and Experiences
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : " text-white border-primary"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col gap-3"
            >
              <div className="text-left mb-2 flex items-center gap-3">
                {typeof skill.icon === "string" ? (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-28 h-auto">{skill.icon}</div>
                )}
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary rounded-full overflow-hidden h-2 mb-2">
                <div
                  className="bg-primary h-full rounded-full origin-left animate-[grow_1.5s_ease_out]"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
              <p className="text-sm text-right text-gray-500">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
