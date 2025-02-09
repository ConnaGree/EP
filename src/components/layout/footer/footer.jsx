import { BookOpenText, FolderGit2, Home, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
      <div className="bg-white/5 backdrop-blur-lg shadow-lg rounded-full flex flex-col items-center border border-white/20 p-2 w-full">
        {/* Navigation Links */}
        <div className="flex justify-around w-full">
          {[
            { to: "hero", label: "{Home}", icon: <Home size={24} /> },
            { to: "about", label: "{About}", icon: <BookOpenText size={24} /> },
            {
              to: "projects",
              label: "{Projects}",
              icon: <FolderGit2 size={24} />,
            },
            { to: "contact", label: "{Contact}", icon: <Mail size={24} /> },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              className="flex flex-col items-center p-2 transition-all duration-300 cursor-pointer text-gray-300 hover:text-[#FF891D]"
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <p className="text-gray-400 text-center text-xs mt-2">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
