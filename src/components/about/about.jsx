import React from "react";
import { FaReact, FaNodeJs, FaAndroid, FaGitAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiKotlin,
  SiTypescript,
} from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center px-2 md:px-8 py-12 text-white">
      <h1 className="my-[2rem] font-[600] text-[3rem]">[About Me_]</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
        {/* Code Block UI */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-white/20">
          <pre className="text-gray-400 font-mono text-sm whitespace-pre-wrap">
            {`// About Ebenezer Woldehana
// ---------------------------
// Full-stack Developer | Android Engineer
// Passionate about building scalable and efficient software solutions.
// Expertise in React, Node.js, and Android Development (Kotlin).
// Always learning new technologies and pushing the boundaries of innovation.`}
          </pre>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-white/20 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">
            // Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-4xl text-white">
            <FaReact className="text-blue-400" />
            <FaNodeJs className="text-green-500" />
            <SiMongodb className="text-green-400" />
            <SiTailwindcss className="text-cyan-400" />
            <SiKotlin className="text-purple-400" />
            <SiTypescript className="text-blue-500" />
            <FaAndroid className="text-green-400" />
            <FaGitAlt className="text-orange-400" />
          </div>
        </div>

        {/* Experience & Skills */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-white/20">
          <pre className="text-gray-400 font-mono text-sm whitespace-pre-wrap">
            {`// Experience & Skills
// ----------------------
// 3+ years in Web & Mobile Development
// Built scalable REST APIs using Node.js & Express
// Developed cross-platform apps using React Native
// Strong understanding of database design (MongoDB, Firebase)
// Proficient in version control (Git, GitHub)`}
          </pre>
        </div>

        {/* Fun Fact */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-white/20">
          <pre className="text-gray-400 font-mono text-sm whitespace-pre-wrap max-w-full">
            {`// Fun Fact
// ----------------------
// Loves exploring open-source projects.
// Favorite tool: VS Code (with lots of extensions).
// Enjoys writing clean, maintainable code.`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default About;
