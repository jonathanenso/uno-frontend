import React, {useEffect} from "react";
import { Container } from "reactstrap";

// core components
import LandingNavbar from "../components/Navbars/LandingNavbar";
import LandingNavbarNoLink from "../components/Navbars/LadingNavbarNoLink";
import LandingFooter from "../components/Footers/LandingFooter";
import LandingFooterNoLink from "../components/Footers/LandingFooterNoLink";
import LandingCarousel from "../components/Landing/Carousel";
import '../assets/css/landing.css';

function LandingPage() {

	useEffect(() => {
			document.body.classList.add("landing-page");
			document.body.classList.add("sidebar-collapse");
			document.documentElement.classList.remove("nav-open");
			return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
	});

	return (
		<>
		{/* NavBar */}

		{/* <LandingNavbar /> */}
		<LandingNavbarNoLink />
		<div className="wrapper home-uno" >
			<div className="container-fluid content-custom">
				<Container>
					<div className="section section-about-us">
						{/* Carousel */}
						<LandingCarousel />
					</div>
				</Container>
				{/* Footer */}
			</div>
			{/* <LandingFooter /> */}
			<LandingFooterNoLink />
		</div>
		</>
	);
}

export default LandingPage;
