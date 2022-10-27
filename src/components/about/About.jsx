import React from "react";
import "./About.css";
import Button from "../shared/Button";
import Title from "../shared/Title";
import { FaAward } from "react-icons/fa";
import { FiAward, FiUserPlus } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <Title text="Get To Know" title="About Me" />
      <div className="about-content">
        <div className="about-image">
          <img src={"/assets/profile.png"} alt="Aayush verma" />
        </div>
        <div className="about-container">
          <div className="content-container">
            <div className="content-box">
              <FiUserPlus/>
              <h3>Experience</h3>
              <p>7 Months Operation Exec. 7 Months HR Exec.</p>
            </div>

            <div className="content-box">
              <FaAward/>
              <h3>Education</h3>
              <p>IGNOU - BCA</p>
            </div>

            <div className="content-box">
              <AiOutlineProject />
              <h3>Projects</h3>
              <p>10+ projects.</p>
            </div>
          </div>

          <p className="text">
            A passionate coder, always eager to learn new stuff, work on
            different new technologies, and break complex problems into simpler
            steps. Intermediate knowledge in Web development which includes
            HTML,CSS,JavaScript, ReactJs. Also, have a decent knowledge of
            NodeJs, MongoDB ,Java and Data Structure.
          </p>

          <p className="text">
            With my holistic knowledge of Software Development, I'm on the
            journey to find a better Digital Infrastructure for the Humanity.
            Also looking for a challenging and responsible position in a
            growth-oriented company to use my extensive knowledge and skills
            also prove myself in terms of technology with innovative ideas and
            become a valuable person for the organization.
          </p>

          <a href="#contact">
            <Button text="Let's Talk" position="left" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
