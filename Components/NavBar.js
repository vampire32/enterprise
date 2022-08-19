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




const NavBar = () => {
	
	return (
		<>
			<Navbar variant="dark" expand="lg">
				<Container className="text-white">
					<Navbar.Brand href="#home">
						<div className="d-inline-block align-top">
							<Image alt="" src={LOgo} width="30" height="30" />
							USS ENTERPRISES
						</div>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-center flex-grow-1 ">
							<Nav.Link className="text-white" href="#home">
								<Link href="/">
									<a className="text-white">Home</a>
								</Link>
							</Nav.Link>
							<NavDropdown id="nav-dropdown-dark-example" title="Services">
								<NavDropdown.Item>
									<Link href="/Services">
										<a className="text-black font-bold">Services</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link href="/ENDUSINGComputing">
										<a className="text-black">End User Computing</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link href="/ENTERPRISEComputing">
										<a className="text-black">Enterprise Computing</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link href="/SOFTWARESOLUTION">
										<a className="text-black">Software Solution</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link href="NETWORKandPOWERSOLUTION">
										<a className="text-black">Network & Power Solution</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link href="SecuritySolution">
										<a className="text-black">Security Solution</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link href="ITConsultant">
										<a className="text-black">IT COnsultant</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link href="ServicesComponentSolution">
										<a className="text-black">Service & Component Solution</a>
									</Link>
								</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="About" id="basic-nav-dropdown">
								<NavDropdown.Item>
									<Link href="/About">
										<a className="text-black">About</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>
									<Link href="/CEOMessage">
										<a className="text-black">CEO Message</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="">
									<Link href="/Alliances">
										<a className="text-black">Our Alliances</a>
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item href="">
									<Link href="/OurClients">
										<a className="text-black">Our Clients</a>
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link>
								{" "}
								<Link href="/Contact">
									<a className="text-white">Conatct Us</a>
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
