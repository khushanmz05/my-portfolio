"use client";

import React from "react";
import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  imageurl: string;
  link: string;
};

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  imageurl,
  link,
}) => {
  return (
    <div className="flex flex-col items-start justify-center bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 transition-colors duration-300">
      <Image
        src={imageurl}
        alt={title}
        width={800}
        height={600}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="project-card-content p-4 w-full">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-left">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-left">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-left inline-block"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
