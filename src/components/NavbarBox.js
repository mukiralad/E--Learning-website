import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useUserAuth } from "../Auth";
import Container from "@mui/material/Container";
import logo from "../assets/logo.png";

const NavbarBox = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <>
        <Navbar bg="light" expand="lg" variant="light" sticky="top">
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Navbar.Brand
            href="/home"
            onSelect={(e) => {
              e.preventDefault();
            }}
          >
            E-Learning Module
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mt-auto">
              <Nav.Link
                href="/home"
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                Home
              </Nav.Link>
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item href="/introduction">
                  {" "}
                  Introduction{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/elc">
                  {" "}
                  English Language and Communication{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/pps">
                  {" "}
                  Programming for Problem Solving{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/em">
                  {" "}
                  Engineering Mathematics - 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/spod">
                  {" "}
                  Semiconductor Physics and Optoelectronic Devices{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/bee">
                  {" "}
                  Basic Electrical Engineering{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="/profile"
                onSelect={(e) => {
                  e.preventDefault();
                }}
              >
                Profile
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </>
  );
};

export default NavbarBox;
