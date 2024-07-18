import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import email from "../../assets/email.svg";
import location from "../../assets/user-location.svg";
import phone from "../../assets/phone.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e3c2cfe3-fed1-42e0-9d83-df4a65d38667");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="" /> <p>k.gauravsingh018@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="" /> <p>+91 94724 85539</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" /> <p>Bengaluru, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
