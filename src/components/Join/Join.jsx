import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef(null); // Corrected useRef usage

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mx1a27y", "template_16s4bkt", form.current, {
        publicKey: "cPXfdpihCMOn2NOT6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address"
          />
          <button type="submit" className="btn btn-join">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
