import React from "react";

import "./Navbar.css";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isSticky ? "nav sticky" : "nav"}>
      <Link
        activeClass="active"
        to="sec1"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        ABOUT
      </Link>
      <Link
        activeClass="active"
        to="sec2"
        spy={true}
        smooth={true}
        duration={500}
      >
        SKILLS
      </Link>
      <Link
        activeClass="active"
        to="sec3"
        spy={true}
        smooth={true}
        duration={500}
      >
        PROJECTS
      </Link>
      <Link
        activeClass="active"
        to="sec4"
        spy={true}
        smooth={true}
        duration={500}
      >
        CONTACT
      </Link>
    </nav>
  );
};
export default Navbar;
