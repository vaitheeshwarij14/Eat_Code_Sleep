import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>EAT SLEEP CODE REPEAT</p>
            </div>
            <p className="mid">
            Coding is the process of crafting instructions for computers using programming languages. 
            It serves as the foundation of software development, facilitating the creation of everything
            from basic websites to intricate operating systems. Through coding, developers can automate 
            tasks, tackle complex problems, and build innovative applications that boost productivity 
            and improve quality of life. Mastery of coding encompasses not only a grasp of syntax and 
            algorithms but also the cultivation of logical thinking and problem-solving abilities.
            As technology evolves, coding continues to be a crucial skill, propelling innovation and 
            transforming the landscape of numerous industries.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
