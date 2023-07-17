import React, { useState } from "react";
import "./Contact.css";
import { TextField, dividerClasses } from "@material-ui/core";
import { Button, MenuItem } from "@material-ui/core";
import Stack from "@mui/material/Stack";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setName(value);
    if (name === "name") {
      if (value === "") {
        setName("");
        setErrorMessage("Name is required");
      }
    }
    if (value.length > 0) {
      setErrorMessage("");
    }
  };

  const validateEmail = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, value } = e.target;
    setEmail(value);
    if (name === "email") {
      if (value === "") {
        setEmail("");
        setErrorMessage("Email is required");
      }
      const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      console.log(!pattern.test(value));
      if (!pattern.test(value)) {
        setErrorMessage("Email is invalid");
      } else {
        setErrorMessage("");
      }
    }
  };

  const validateMessage = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setMessage(value);
    if (name === "message") {
      if (value === "") {
        setMessage("");
        setErrorMessage("Message is required");
      }
    }
    if (value.length > 0) {
      setErrorMessage("");
    }
  };

  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
        >
          Contact Me
        </h1>
      </div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "25px",
        }}
        className="form"
      >
        <stack spacing={2}>
          <menuItem>
            <TextField
              defaultValue={name}
              onBlur={validateName}
              id="outlined-basic"
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              style={{ backgroundColor: "white" }}
            />
          </menuItem>
          <menuItem>
            {""}
            <TextField
              defaultValue={email}
              onBlur={validateEmail}
              id="outlined-basic"
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              style={{ backgroundColor: "white" }}
            />
          </menuItem>
          <menuItem>
            <textarea
              defaultValue={message}
              onBlur={validateMessage}
              rows="15"
              cols="40"
              id="outlined-basic"
              label="Message"
              name="message"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "white" }}
              placeholder="Message"
            />
          </menuItem>
          {errorMessage && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "25px",
              }}
            >
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "25px",
            }}
          >
            <button
              id="contact-button"
              className="pop-up-hover"
              xs={{ width: `100%` }}
              variant="contained"
            >
              Submit
            </button>
          </MenuItem>
        </stack>
      </form>
    </>
  );
}
