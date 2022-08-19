import React from "react";
import ContactForm from "../Components/ContactForm";
import LandingPage from "../Components/LandingPage";
import NavBar from "../Components/NavBar";

const About = () => {
	return (
		<>
			<section
				className="u-align-center u-clearfix u-gradient u-section1"
				src=""
				id="sec-a2a2"
			>
				<NavBar />
				<LandingPage
					Name="About"
					desc="Ipsum voluptate eu amet nostrud do enim quis dolore. Est nostrud amet velit ullamco ad eu ipsum deserunt culpa tempor. Aliquip velit ipsum incididunt est officia proident incididunt."
				/>
			</section>
			<section className="u-clearfix u-white usection2" id="carousel_ad49">
				<div className="u-container-style u-group u-shape-rectangle u-white u-group-1">
					<div className="u-container-layout u-container-layout-1">
						<div className="u-container-style u-group u-shape-rectangle u-group-2">
							<div className="u-container-layout u-container-layout-2">
								<h3 className="u-align-left u-text u-text-1">
									About Our Company
								</h3>
								<p className="u-align-justify u-text u-text-2">
									<span>
										&nbsp; USS Enterprises is one of the fastest emerging IT
										Solution provider serving in IT industry since 2015 with a
										wide range of our{" "}
										<b>
											<i>“Products and Services Portfolio” </i>
										</b>
										covering every end to end requirement in IT Infrastructure.
										&nbsp; We believe in working as technology partner and
										solution provider for our clientele with an experienced and
										well qualified team of professionals and technology
										specialists. The key to our success is our Customer Oriented
										policies, our belief in Consultative Selling and the top of
										the line Support and Post Sales Services to our valued
										customers.&nbsp;
										<br />
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="u-image u-image-circle u-image-contain u-image-1"
					data-image-width="241"
					data-image-height="192"
				></div>
				<div className="u-align-center u-list u-list-1">
					<div className="u-repeater u-repeater-1">
						<div className="u-container-style u-custom-item u-list-item u-palette-1-light-1 u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-3">
									Our Vision
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-4">
									<span>
										&nbsp; Our vision is simple to be an effectivevalue-added
										technology partner trusted by its clients through our
										consultative selling, support and services for their every
										exploration with innovations.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-default u-text-5">
									Our Mission
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-palette-1-base u-text-6">
									<span className="u-text-body-alt-color">
										&nbsp; Creating a powerful and valued brand associated to
										being a trusted corporate strategy consultant that will be
										synonymous with developing and addressing the business
										problems of customers through technological change and
										innovation.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
						<div className="u-container-style u-custom-item u-list-item u-palette-1-base u-repeater-item u-shape-rectangle">
							<div className="u-container-layout u-similar-container u-valign-top u-container-layout-5">
								<h3 className="u-align-left u-custom-font u-custom-item u-font-montserrat u-text u-text-body-alt-color u-text-default u-text-7">
									Our Core Values
								</h3>
								<p className="u-align-justify u-custom-item u-text u-text-8">
									<span>
										Committed with dedication.
										<br />
										&nbsp;Teamwork &amp; Synchronization.&nbsp;
										<br />
										Compliance professionally
										<br />
										Best Recommendations.
										<br />
										&nbsp;Consultancy with Excellency.&nbsp;&nbsp;
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
      <ContactForm/>
		</>
	);
};

export default About;
