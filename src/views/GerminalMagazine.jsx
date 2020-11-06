import React, { useEffect, useRef, useState } from "react";
import { useLocation  } from "react-router-dom";


// reactstrap components
import {
	Button,
	Container,
	Card, 
	CardText, 
	CardBody,
	CardTitle,
	CardImg
} from "reactstrap";

// core components
import LandingNavbar from "../components/Navbars/LandingNavbar";
import LandingFooter from "../components/Footers/LandingFooter";
import CarouselCultura from "../components/Landing/CarouselCultura";

import '../assets/css/landing.css';

function GerminalMagazinePage() {

	const location = useLocation();

	useEffect(() => {
			document.body.classList.add("landing-page");
			document.body.classList.add("sidebar-collapse");
			return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
	});

    const sectionRevista = useRef(null);
    
	const scrollTo = (ref) => {
		window.scroll({
		  top: ref.current.offsetTop,
		  behavior: "smooth",
		});
	  };


	  	//Manejo de scroll a cada sección
	useEffect(() => {

		if(location.state){

			var section = location.state.section;

			if(section == 'revista'){
				scrollTo(sectionRevista);
			}
		}
	}, [location]);

	const [scroll, setScroll] = useState('');

	const [optionRevista, setOptionRevista] = useState('');

	
	useEffect(() => {

		function handelScroll() {
			let scrollCheck = window.scrollY;
			setScroll(scrollCheck);
		}

		window.addEventListener('scroll', handelScroll)
	
		//Desmontar listener
		return function cleanupListener() {
			window.removeEventListener('scroll', handelScroll)
		}
	});

	useEffect(() => {
		const divSectionRevista = sectionRevista.current.offsetHeight-20;

		

		if(scroll >= 0 && scroll <= divSectionRevista ){
			setOptionRevista('active');
		}else{
			setOptionRevista('');
		}
		
		document.activeElement.blur();
	},[scroll]);
	
	
	return (
		<>
		{/* NavBar */}
		<LandingNavbar />
		<div className="page">
			<div className="row">
				{/* Menu lateral */}
				
				<div className="col-lg-3 back-uno">
					<div className="sticky-top menu-uno">
					    <div className="send-button">
							<Button block className="btn-round initial" color="primary-dark-brown" onClick={e => e.preventDefault()} size="lg">
                            REVISTA GERMINAL
							</Button>
						</div>
		

					</div>
				</div>
				<div className="col-lg-9 back-uno">
				<Container>
					{/* Revista Germinal */}
					<div className="card-deck" ref={sectionRevista}>
						<div className="magazine-mobile">
								<CarouselCultura />
						</div>
						<Card className="card-deck-culture" style={{ paddingTop: "80px"}}>
							<CardBody>
								{/* Carousel */}
								<CarouselCultura />
							</CardBody>
						</Card>
					</div>
				</Container>
				</div>
			</div>
			{/* Footer */}
			<LandingFooter />
		</div>
		</>
	);
}

export default GerminalMagazinePage;