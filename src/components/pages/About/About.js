import React from "react";
import "./About.css";
import CardMedia from "@mui/material/CardMedia";
import hero from "../../../images/Jason bw formal-circle.png"

export default function About() {
  return (
    <>
      <div className="image-container">
        <CardMedia
          component="img"
          class-name="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={hero}
          alt="Jason Weaver"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">A born problem solver, coding comes naturally to me - yet I
          enjoy a challenge and am continually learning. For the past decade,
          I've focused on Tech Support for Dental Professionals. Now I'm
          broadening my knowledge base to include full stack: HTML5, CSS3,
          JavaScript, jQuery, Express.js, React.js, Node.js, progressive web
          apps, agile methodology, computer science, database theory, MongoDB,
          MySQL, Git, and more.</p>
        <p id="p-about">With a keen attention to detail and strong work ethic, I look forward
          to increasing the value of your organization.</p>
        <p id="p-about">Me</p>
        <p id="p-about">Me</p>
        <p id="p-about">Me</p>
      </div>
    </>
  );
}
