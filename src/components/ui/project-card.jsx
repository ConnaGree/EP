import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-white/20 w-full">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-300">{project.title}</h3>
      <p className="text-sm text-gray-400 my-2">{project.excerpt}</p>
      <div className="flex gap-4 text-xl text-white mb-4">
        {project.techStack.map((TechIcon, index) => (
          <TechIcon key={index} className="text-gray-300" />
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          Live Demo
        </a>
        <a
          href={project.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;