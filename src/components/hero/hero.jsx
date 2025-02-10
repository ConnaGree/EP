import { TypeAnimation } from "react-type-animation";
import { cv } from "../../assets";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="hero"
      className="h-[100vh] hero flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="md:text-[5rem] text-[3rem] font-[700] text-white">
        Hello, I'm <span className="text-[#FF891D]">Ebenezer Woldehana</span>{" "}
        <br />A{" "}
        <span className="text-[#FF891D] font-mono">
          <TypeAnimation
            sequence={[
              "Web Developer>/_",
              1800,
              "Android Developer>/_",
              1800,
              "Software Engineer>/_",
              1800,
              "Tech Enthusiast>/_",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        {/* Glassmorphic Contact Me Button */}
        <Link
          to="contact" // The ID of the section you want to scroll to
          smooth={true} // Enables smooth scrolling
          duration={500} // Time in ms for the scroll animation
          spy={true} // Highlights the active section
          offset={-50} // Offset to adjust the scroll position (useful for fixed headers)
        >
          <button className="px-6 py-3 rounded-lg text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
            <span className="">Contact Me</span>
          </button>
        </Link>

        {/* Ghost Download CV Button */}
        <a
          href={cv}
          download="cv.pdf"
          role="button"
          className="px-6 py-3 rounded-lg border-2 border-[#FF891D] text-[#FF891D] hover:bg-orange-500 hover:text-white transition-all"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
