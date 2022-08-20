import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
  return (
		<footer className="footer-48201" data-aos="fade-in">
			<div className="container">
				<div className="row">
					<div className="col-md-4 pr-md-5">

						<a style={{ color:"#eda80e"}} href="#" className="footer-site-logo d-block mb-4">
						USS ENTERPRISES
						</a>
						<p>
						USS Enterprises is one of the fastest emerging IT Solution provider serving in IT industry 
						since 2015 with a wide range of our “Products and Services Portfolio.
						</p>

						
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Services</a>
							</li>
							<li>
								<a href="#">Product Portfolio</a>


							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">CEO Message</a>

							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">CEO Message</a>
							</li>
							
						</ul>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
							<li>
								<a href="#">Our Alliances</a>
							</li>
							<li>
								<a href="#">Our Clients</a>
							</li>
							<li>
								<a href="#">Contact Us</a>
							</li>
							<li>
								<a href="#">Team</a>
							</li>

						</ul>
					</div>
					<div className="col-md">
						<ul className="list-unstyled nav-links">
							<li>
								<a href="#">Privacy Policy</a>
							</li>

						</ul>
					</div>
					<div className="col-md text-md-center">
						<ul className="social list-unstyled">
							<li>
								<a href="#">
									<span className="icon-instagram">Instagram</span>
								</a>
							</li>
							<li>
								<a href="#">
									<span className="icon-facebook">Facebook</span>
								</a>
							</li>
							
						</ul>
						<p className="">
							<a href="#" className="btn btn-tertiary">
								Contact Us
							</a>
						</p>
					</div>
				</div>

				<div className="row ">
					<div className="col-12 text-center">
						<div className="copyright mt-5 pt-5">
							<p>

								<small>&copy; 2022 All Rights Reserved - USS ENTERPRISES </small>

								<small>
									&copy; 2022 All Rights Reserved - USS ENTERPRISES{" "}
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer