"use client";

import Navbar from "../../../components/Navbar";
import ProjectCard from "../../../components/ProjectCard";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Duck Shooting Game",
    description: "A fun shooting game programmed in C.",
    image: "/duck_hunt.jpg",
    link: "https://github.com/EpitechPGEPromo2029/B-MUL-100-BAR-1-1-myhunter-khushan-hitesh.kanakrai.git",
    tags: ["C", "Game Development"],
  },
  {
    id: 2,
    title: "Shell Programming",
    description: "A simple shell program created as part of system programming exercises.",
    image: "/shell.jpg",
    link: "https://github.com/EpitechPGEPromo2029/B-PSU-200-BAR-2-1-minishell2-khushan-hitesh.kanakrai.git",
    tags: ["C", "System Programming"],
  },
  {
    id: 3,
    title: "Wolfenstein 3D Clone",
    description: "A basic clone of the Wolfenstein 3D game.",
    image: "/wolf3db.jpg",
    link: "https://github.com/EpitechPGEPromo2029/G-ING-210-BAR-2-1-wolf3d-andrei.kocherzhinskii",
    tags: ["C", "Game Development"],
  },
  {
    id: 4,
    title: "ToDo List App",
    description: "A full-stack ToDo List application built with Node.js and Express.",
    image: "/todo.png",
    link: "https://github.com/EpitechPGEPromo2029/B-WEB-200-BAR-2-1-epytodo-bruna-monasse.macuacua.git",
    tags: ["Node.js", "Express", "JavaScript"],
  },
  {
    id: 5,
    title: "Train Station Data Analysis",
    description: "Data analysis on train station datasets using Python.",
    image: "/train.jpg",
    link: "https://github.com/EpitechPGEPromo2029/G-AIA-210-BAR-2-1-tardis-bruna-monasse.macuacua.git",
    tags: ["Python", "Data Analysis"],
  },
];


export default function Projects() {
  const [loaded, setLoaded] = useState(false);  // track loading for animation

  useEffect(() => {
    // Trigger fade-in after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Navbar />

      <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 sm:p-20 max-w-6xl mx-auto
          transition-opacity duration-1000 ease-in-out
          ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageurl={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}