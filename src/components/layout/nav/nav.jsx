import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../../constants";

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
      className={`w-full fixed z-50 transition-transform duration-300 bg-primary border-b-[2px] border-black  ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex items-center justify-between">
        <Link
          className="text-[2rem] py-3 px-5 border-r-[2px] border-black"
          to={"/"}
        >
          <span className="text-accent font-[800]">ZY</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center px-5 py-3 gap-5">
          {navLinks.map((link, index) => {
            return (
              <li className="text-[1rem] uppercase" key={index}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#FD3A01 font-[700]" : "#bdbdbd",
                    fontWeight: isActive ? "bold" : "normal",
                    background: "transparent",
                    padding: 0,
                  })}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
          >
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {toggleProfile && (
          <div className="profile top-[3rem] right-[1rem] absolute bg-bgSecondary rounded-md px-[1rem] py-[.5rem]">
            <span className="block text-[.9rem]">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="logout bg-accent text-white w-full px-[.5rem] py-[.2rem] mt-[.6rem] rounded-md"
            >
              Logout
            </button>
          </div>
        )}

        {isMobileMenuOpen && (
          <div className="absolute md:hidden w-full h-full right-[1rem] top-[3rem]">
            <div className="flex bg-bgSecondary w-[300px] p-[1rem] rounded-md flex-col items-center justify-center z-40">
              <ul className="text-center space-y-6">
                {navLinks.map((link, index) => {
                  // Exclude Login link if user is logged in
                  if (user && link.label === "Login") {
                    return null;
                  }

                  return (
                    <li
                      key={index}
                      className="text-white text-xl font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    >
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#FD3A01" : "white",
                          fontWeight: isActive ? "bold" : "normal",
                          background: "transparent",
                          padding: 0,
                        })}
                        to={link.path}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
