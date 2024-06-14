import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social">
          <img
            style={{ height: "5rem", width: "5rem", bottom: "5rem" }}
            src={github}
            alt=""
          />

          <img
            style={{ height: "5rem", width: "5rem", bottom: "5rem" }}
            src={instagram}
            alt=""
          />
          <img
            style={{ height: "5rem", width: "5rem", bottom: "5rem" }}
            src={linkedin}
            alt=""
          />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
