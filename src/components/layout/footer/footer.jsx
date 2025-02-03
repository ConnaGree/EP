import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full relative flex items-center justify-between bg-bgSecondary px-[2rem]">
      <Link className="font-[800] text-[1.5rem]" to={"/"}>
        L<span className="text-accent">y</span>fe
      </Link>

      <p className="text-[.5rem] md:text-[.7rem]">
        &copy; {currentYear} Lyfe Blogs. All rights reserved.
      </p>

      {/* <ul className="flex items-center gap-5">
        {user && (
          <li>
            <button
              onClick={() => setToggleProfile((prev) => !prev)} // Corrected here
              className="w-[30px] bg-accent flex items-center justify-center rounded-full text-[.9rem] h-[30px] uppercase"
            >
              {user?.email?.slice(0, 2)}
            </button>
          </li>
        )}
      </ul> */}

      {/* {toggleProfile && (
        <div className="profile bottom-[3rem] right-[1rem] absolute bg-bgSecondary rounded-md px-[1rem] py-[.5rem]">
          <span className="block text-[.9rem]">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="logout bg-accent text-white w-full px-[.5rem] py-[.2rem] mt-[.6rem] rounded-md"
          >
            Logout
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Footer;
