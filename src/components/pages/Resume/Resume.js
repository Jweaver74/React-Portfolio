import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PdfFile from "../../../Resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <Box>
      <div>
        <a
          href={PdfFile}
          download="Jason Weaver Resume"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-up-hover">
            Click Here To Download My Resume
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front End Proficiencies
        </h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingRight: "50px",
            fontSize: "25px",
            listStyleType: "disc", // Use 'disc' for bullet points
          }}
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back End Proficiencies
        </h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingRight: "50px",
            fontSize: "25px",
            listStyleType: "disc", // Use 'disc' for bullet points
          }}
        >
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>NoSQL, MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL </li>
        </ul>
      </div>
    </Box>
  );
}
