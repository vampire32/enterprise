import React from 'react'
import ContactForm from '../Components/ContactForm';
import LandingPage from '../Components/LandingPage'
import NavBar from '../Components/NavBar'


const Contact = () => {
  return (
		<>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar />
				<LandingPage
					Name="Contact Us"
					desc="Ipsum voluptate eu amet nostrud do enim quis dolore. Est nostrud amet velit ullamco ad eu ipsum deserunt culpa tempor. Aliquip velit ipsum incididunt est officia proident incididunt."
				/>
			</section>
			<ContactForm />
		</>
	);
}

export default Contact
