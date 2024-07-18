import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import resume from "../../assets/GauravSingh_Frontend_2years_Resume.pdf";
import { Link } from "react-router-dom";

const Hero = (menu) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "GauravSingh_Frontend_2years_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Gaurav Kumar Singh,</span> frontend developer based in india
      </h1>
      <p>
        I am a frontend developer from Bengaluru, India with 2 years of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p onClick={() => setMenu("contact")}>Connect With Me</p>
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </Link>
        </div>
        <div onClick={handleDownload} className="hero-resume">
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
