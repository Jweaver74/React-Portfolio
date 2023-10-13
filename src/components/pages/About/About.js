import React from "react";
import "./About.css";
import CardMedia from "@mui/material/CardMedia";
import hero from "../../../images/Profile pic.jpg"

export default function About() {
  return (
    <>
      <div className="image-container"style={{ paddingTop: "20px" }} >
        <CardMedia
          component="img"
          class-name="color-img"
          style={{
            height: "auto",
            width: "30%",
            margin: "0 auto",
            paddingTop: "0px",
            border: "solid 5px black",
            borderRadius: "10px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"
          }}
          image={hero}
          alt="Jason Weaver"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p id="p-about">Certified Full Stack Web Development from Southern Methodist University.</p>
        <p id="p-about">A born problem solver, I
          enjoy a challenge and am continually learning. For the past decade,
          I've focused on Tech Support for Dental Professionals. I have
          expanded my knowledge base to include Full Stack: HTML5, CSS3,
          JavaScript, jQuery, Express.js, React.js, Node.js, progressive web
          apps, agile methodology, computer science, database theory, MongoDB,
          MySQL, Git, and more.</p>
        <p id="p-about">With a keen attention to detail and strong work ethic, I look forward
          to increasing the value of your organization.</p>
        </div>
    </>
  );
}
