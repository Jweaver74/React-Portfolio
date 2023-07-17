import React from "react";
import "./About.css";
import CardMedia from "@material-ui/core/CardMedia";

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
        <p id="p-about">ME</p>
        <p id="p-about">Me</p>
        <p id="p-about">Me</p>
        <p id="p-about">Me</p>
        <p id="p-about">Me</p>
      </div>
    </>
  );
}
