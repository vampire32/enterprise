import React from 'react'
import NavBar from '../Components/NavBar'
import CEO from "../Components/CEO";
import Teams from '../Components/Teams';
import Footer from '../Components/Footer';

const OurTeam = () => {
  return (
		<div className="u-body u-overlap u-overlap-contrast u-overlap-transparent u-xl-mode">
			<NavBar theme="light" color="black" />
			<CEO />
            <Teams/>
            <Footer/>
		</div>
	);
}

export default OurTeam