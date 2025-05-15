import Link from "next/link";
import Navbar from "../../../components/Navbar";
import ProjectCard from "../../../components/ProjectCard";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "GTR R34",
        description: "The best car in the world",
        image: "/skyline.jpg",
        link: "https://example.com/project1",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 2,
        title: "Project 2",
        description: "Description of Project 2",
        image: "/path/to/image2.jpg",
        link: "https://example.com/project2",
    },
];


export default function Projects() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>My_project</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project: { id: number; title: string; description: string; image: string; link: string; tags?: string[] }) => (
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
  );
}


