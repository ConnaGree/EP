import { motion } from "framer-motion";
import { CircleCheckBig, Hammer } from "lucide-react";
import React, { useState } from "react";
import ConceptCard from "../ui/concept-card";
import ProjectCard from "../ui/project-card";
import { completedProjects, upcomingProjects } from "../../constants";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("completed");

  

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-2 md:px-8 py-12 text-white"
    >
      <h1 className="my-[2rem] font-[600] text-[3rem]">[My Projects_]</h1>

      <div className="mb-8 flex gap-4">
        <button
          onClick={() => setActiveTab("completed")}
          className={`py-2 flex items-center text-[.85rem] gap-x-2 px-4 rounded-lg ${
            activeTab === "completed" ? "bg-[#FF891D]" : "bg-gray-700"
          }`}
        >
          <CircleCheckBig className="shrink-0" />
          Completed Projects
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`py-2 flex items-center text-[.85rem] gap-x-2 px-4 rounded-lg ${
            activeTab === "upcoming" ? "bg-[#FF891D]" : "bg-gray-700"
          }`}
        >
          <Hammer className="shrink-0" />
          Upcoming Projects
        </button>
      </div>

      {/* Transition between sections */}
      <motion.div
        key={activeTab} // key ensures that the motion is triggered on tab change
        initial={{ opacity: 0 }} // Initially hidden
        animate={{ opacity: 1 }} // Fade in to full visibility
        exit={{ opacity: 0 }} // Fade out on exit
        transition={{ duration: 0.5 }} // Duration of the transition
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full"
      >
        {activeTab === "completed"
          ? completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          : upcomingProjects.map((project, index) => (
              <ConceptCard
                key={index}
                title={project.title}
                description={project.description}
              />
            ))}
      </motion.div>
    </div>
  );
};

export default Projects;
