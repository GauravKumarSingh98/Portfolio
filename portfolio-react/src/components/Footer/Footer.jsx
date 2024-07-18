import React from "react";
import "./Footer.css";
import Gaurav from "../../assets/GAURAV.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Gaurav} alt="" />
          <p>I am a frontend developer from India with 2 years of experience</p>
        </div>
        <form >
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <button type="submit" className="footer-subscribe">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Gaurav Singh. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
