import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleToggle = () => {
    setExpand(!expand);
  };

  const handleSelect = () => {
    setExpand(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home" onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" eventKey="#home">
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="#about">
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/project" eventKey="#project">
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" eventKey="#resume">
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
            <Nav.Link
              href="https://medium.com/@sdmahfuz"
              target="_blank"
              rel="noreferrer"
            >
              <ImBlog style={{ marginBottom: "2px" }} /> Blogs
            </Nav.Link>
            <Button
              href="https://github.com/r3dcoder"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
