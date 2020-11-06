import React, { useEffect, useRef, useState } from "react";
import { useLocation  } from "react-router-dom";


// reactstrap components
import {
	Button,
	Container,
	Card, 
	CardBody
} from "reactstrap";

// core components
import LandingNavbar from "../components/Navbars/LandingNavbar";
import LandingFooterContact from "../components/Footers/LandingFooterContact";

import LandingFooter from "../components/Footers/LandingFooter";

import '../assets/css/landing.css';

import img2 from '../assets/img/landing/MORELIA.png';


function Contact() {

	const location = useLocation();

	useEffect(() => {
			document.body.classList.add("landing-page");
			document.body.classList.add("sidebar-collapse");
			return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
	});

	const sectionDirecciones = useRef(null);
/* 	const sectionTelefonos = useRef(null);
 */

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

			if(section == 'direcciones'){
				scrollTo(sectionDirecciones);
			}

		}
	}, [location]);


	const [scroll, setScroll] = useState('');

	const [optionContacto, setOptionContacto] = useState('');

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
		const divSectionContacto = sectionDirecciones.current.offsetHeight-20;
		

		if(scroll >= 0 && scroll <= divSectionContacto ){
			setOptionContacto('active');
		}else{
			setOptionContacto('');
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
				
				<div className="col-lg-3 back-uno-contact">
					<div className="sticky-top menu-uno">
					    <div className="send-button">
							<Button block className="btn-round initial" color="primary-blue" onClick={e => e.preventDefault()} size="lg">
								CONTACTO
							</Button>
						</div>
						<div className="send-button">
                            <Button block className={"btn-round "+optionContacto} color="blue" href="#direcciones" onClick={()=>scrollTo(sectionDirecciones)} size="lg">
								DIRECCIONES Y TELÉFONOS
							</Button>
						</div>
						{/* <div className="send-button">
                            <Button block className="btn-round" color="blue" href="#telefonos" onClick={()=>scrollTo(sectionDirecciones)} size="lg">
                                TELÉFONOS
							</Button>
						</div> */}
					</div>
				</div>
				<div className="col-lg-9 back-uno-contact" >
				<Container>
					{/*Direcciones */}
					<div className="custom-card-deck" ref={sectionDirecciones}>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>MORELIA</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							Av. Periodismo N°1901, Colonia Rector Hidalgo, Morelia.
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>COALCOMÁN</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							COBAEM Plantel Coalcomán, Coalcomán.
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>NUEVA ITALIA</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							Escuela Secundaria Técnica N°44, Nueva Italia.
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>TEPALCATEPEC</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							Calle Independencia S/N, Colonia Centro, Tepalcatepec.
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>ZAMORA</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							Pino Suárez N°31A esquina con Benito Juárez, Col. Centro
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>BUENA VISTA</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							COBAEM de Santa Ana Amatlán, Buenavista Tomatlán
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>APATZINGAN</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							Corregidora No. 501 Col. Tarepe, Apatzingán.
							</div>
							</CardBody>
						</Card>
						<Card className="direcciones">
							<CardBody className="direcciones-body">
							<div className="card-img-overlay">
								<h5>LOS REYES</h5>
							</div>
							<div className="contact">
							<img src= {img2} className="contact-img" />
							</div>
							<div className="div-black">
							(443)4535990/(443)5833775
							</div>
							<div className="div-black">
							Casa de la Cultura de Los Reyes de Salgado.
							</div>
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

export default Contact;