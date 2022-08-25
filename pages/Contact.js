import React from 'react'
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import LandingPage from '../Components/LandingPage'
import NavBar from '../Components/NavBar'
import Head from "next/head";


const Contact = () => {
  return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar theme="dark" color="white" />
				<LandingPage
					Name="Contact Us"
					desc="Ipsum voluptate eu amet nostrud do enim quis dolore. Est nostrud amet velit ullamco ad eu ipsum deserunt culpa tempor. Aliquip velit ipsum incididunt est officia proident incididunt."
				/>
			</section>
			<ContactForm />
			<Footer />
		</>
	);
}

export default Contact
