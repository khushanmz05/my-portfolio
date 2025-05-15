import React from "react";
import Image from "next/image";
import skyline from "../../projects/skyline.jpg";



type ProjectProps = {
    title: string;
    description: string;
    imageurl: string;
    link: string;
};

const ProjectCard: React.FC<ProjectProps> = ({ title, description, imageurl, link }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4">
            <Image
                src={imageurl}
                alt={title}
                width={800}
                height={600}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="project-card-content p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-blue-500 hover:underline"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;