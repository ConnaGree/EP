import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-lg bg-white/5 border-b-[1px] border-white/20`}
    >
      <div className="relative flex items-center justify-center px-8">
        <Link className="text-[1.5rem] py-3 px-5" to={"/"}>
          <span className="text-[#FF891D] font-[800]">{`{ebenezer_}`}</span>
        </Link>

        {/* Add the rest of your navbar content here */}
      </div>
    </div>
  );
};

export default Nav;
