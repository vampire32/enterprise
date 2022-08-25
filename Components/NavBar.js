import React,{useState,forwardRef,} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import NavDropdown from "react-bootstrap/NavDropdown";
import LOgo from "../styles/images/logo.png";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";




const NavBar = (props) => {
	const Color=props.color;
	
	
	
	return (
		<>
			<Navbar variant={props.theme} expand="lg">
				<Container className="text-[props.color]">
					<Navbar.Brand href="#home">
						<div className="d-inline-block align-top">
							<Image alt="" src={LOgo} width="30" height="30" />
							Universal Systemic Solution
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-center flex-grow-1 ">
							<Nav.Link style={{ color: Color }}>
								<Link href="/">
									<a style={{ color: Color }}>Home</a>
								</Link>
							</Nav.Link>
							<Nav.Link style={{ color: Color }}>
								<Link href="/Services">
									<a style={{ color: Color }}>Services</a>
								</Link>
							</Nav.Link>
							<Nav.Link style={{ color: Color }}>
								<Link href="/Portfolio">
									<a style={{ color: Color }}>Portfolio</a>
								</Link>
							</Nav.Link>
							<Nav.Link style={{ color: Color }}>
								<Link href="/OurClients">
									<a style={{ color: Color }}>Our Clients</a>
								</Link>
							</Nav.Link>
							<Nav.Link style={{ color: Color }}>
								<Link href="/OurTeam">
									<a style={{ color: Color }}>Our Teams</a>
								</Link>
							</Nav.Link>

							<Nav.Link style={{ color: Color }}>
								<Link href="/About">
									<a style={{ color: Color }}>About</a>
								</Link>
							</Nav.Link>
							<Nav.Link>
								{" "}
								<Link href="/Contact">
									<a style={{ color: Color }}>Conatct Us</a>
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
