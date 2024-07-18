import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpeg";



const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                Hello! I'm Gaurav Kumar Singh, a passionate Software Engineer
                based in Bengaluru. With over 2+ years of experience in the field
                of Software Development, I specialize in Web Development. I have
                worked on numerous projects that span E-commerce, Healthcare,
                delivering high-quality results that exceed client expectations.
              </p>
              <p>
                My journey began with a degree in Master Of Computer Application
                from Lakshmi Narain College Of Technology, and since then, I
                have honed my skills in Web Development.
              </p>
              <p>
                Outside of work, I am passionate about travelling new Places,
                Watching Cricket and Sci-fi Movies, Listening Music , which
                often inspire my creative process.
              </p>
              <p>
                I am always looking for new challenges and opportunities to
                grow. Feel free to get in touch with me.
              </p>
              <p>Let's create something amazing together!</p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>Redux</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Tailwind CSS</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>Git</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="about-achievements">
          <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
