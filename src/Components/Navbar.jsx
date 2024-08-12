import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="bg-success navbar-dark sticky-top"
			style={{ minHeight: "80px" }}
		>
			<Container>
				<Navbar.Brand className="fw-bold fs-4">
					<Link
						className="text-white"
						style={{ textDecoration: "none" }}
						to={"/"}
					>
						ROOTFILLS
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link
							className="navbar-nav nav-item p-2 link-offset-2  link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
							style={{ fontSize: "1.22em" }}
							eventKey={"1"}
							onClick={() => navigate("/")}
						>
							Home
						</Nav.Link>
						<Nav.Link
							className="navbar-nav nav-item p-2 link-offset-2  link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
							style={{ fontSize: "1.22em" }}
							eventKey={"2"}
							onClick={() => navigate("/about")}
						>
							About
						</Nav.Link>
						<Nav.Link
							className="navbar-nav nav-item p-2 link-offset-2  link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
							style={{ fontSize: "1.22em" }}
							eventKey={"3"}
							onClick={() => navigate("/Services")}
						>
							Services
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
