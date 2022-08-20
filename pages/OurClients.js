import React from 'react'
import Clients from '../Components/Clients';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import LandingPage from '../Components/LandingPage';
import NavBar from '../Components/NavBar';

const OurClients = () => {
  return (
		<div>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar />
				<LandingPage
					Name="Our Clients"
					desc="Ipsum voluptate eu amet nostrud do enim quis dolore. Est nostrud amet velit ullamco ad eu ipsum deserunt culpa tempor. Aliquip velit ipsum incididunt est officia proident incididunt."
				/>
			</section>
			<div className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode">
				<Clients/>
			</div>
			<ContactForm />
			<Footer/>
		</div>
	);
}

export default OurClients