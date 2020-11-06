import React, { useEffect, useRef } from "react";
import { useLocation  } from "react-router-dom";


// reactstrap components
import {
	Button,
	Container,
	Card, 
	CardText, 
	CardBody,
	CardTitle,
	CardImg,
	Form,
	FormGroup,
	Input,
	Label,
	Col
} from "reactstrap";




// core components
import LandingNavbar from "../components/Navbars/LandingNavbar";
import LandingFooter from "../components/Footers/LandingFooter";
import '../assets/css/landing.css';
import card1 from '../assets/img/landing/sociales.jpg';
import card2 from '../assets/img/landing/1138.png';
import card3 from '../assets/img/landing/504419-PHS4G9-800.png';
import card4 from '../assets/img/landing/O6JTUC0.png';
import card5 from '../assets/img/landing/ProcesalPenal.jpg';
import card6 from '../assets/img/landing/doctorado educacion.jpg';
import card7 from '../assets/img/landing/penal acusatorio.jpeg';
import card8 from '../assets/img/landing/administracion.jpg';
import card9 from '../assets/img/landing/ciencias penales.jpg';
import card10 from '../assets/img/landing/JucioOral.jpg';
import card11 from '../assets/img/landing/GestionNegocios2.jpg';
import card12 from '../assets/img/landing/DoctoradoAdmin.jpg';
import stns from '../assets/img/landing/stsns.png';
import convenio from '../assets/img/landing/convenio.png';




function StudiesCarrearsPage() {

	const location = useLocation();

	useEffect(() => {
			document.body.classList.add("landing-page");
			document.body.classList.add("sidebar-collapse");
			return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
	});

	const sectionBachillerato = useRef(null);
	const sectionLicenciatura = useRef(null);
	const sectionMaestrias = useRef(null);
	const sectionDoctorados = useRef(null);
	const sectionConvenios = useRef(null);
	const sectionInscripciones = useRef(null);


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

			if(section == 'bachillerato'){
				scrollTo(sectionBachillerato);
			}


			if(section == 'licenciatura'){
				scrollTo(sectionLicenciatura);
			}


			if(section == 'maestrias'){
				scrollTo(sectionMaestrias);
			}


			if(section == 'doctorados'){
				scrollTo(sectionDoctorados);
			}

			if(section == 'convenios'){
				scrollTo(sectionConvenios);
			}

			if(section == 'inscripciones'){
				scrollTo(sectionInscripciones);
			}
		}
	}, [location]);



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
							<Button block className="btn-round initial" color="primary-brown" href="#" onClick={e => e.preventDefault()} size="lg">
								OFERTA ACADEMICA
							</Button>
						</div>
						<div className="send-button">
							<Button block className="btn-round" color="brown" href="#bachillerato" onClick={()=>scrollTo(sectionBachillerato)} size="lg">
								BACHILLERATO
							</Button>
						</div>
						<div className="send-button">
							<Button block className="btn-round" color="brown" href="#licenciatura" onClick={()=>scrollTo(sectionLicenciatura)} size="lg">
								LICENCIATURAS
							</Button>
						</div>
						<div className="send-button">
							<Button block className="btn-round" color="brown" href="#maestrias" onClick={()=>scrollTo(sectionMaestrias)} size="lg">
								MAESTRÍAS
							</Button>
						</div>
						<div className="send-button">
							<Button block className="btn-round" color="brown" href="#doctorados" onClick={()=>scrollTo(sectionDoctorados)} size="lg">
								DOCTORADOS
							</Button>
						</div>
						<div className="send-button">
							<Button block className="btn-round" color="brown" href="#convenios" onClick={()=>scrollTo(sectionConvenios)} size="lg">
								CONVENIOS
							</Button>
						</div>
						<div className="send-button">
							<Button block className="btn-round" color="brown" href="#incripciones" onClick={()=>scrollTo(sectionInscripciones)} size="lg">
								INSCRIPCIONES
							</Button>
						</div>
						
					</div>
				</div>
				<div className="col-lg-9 back-uno">
				<Container>
					<div className="card-deck" ref={sectionBachillerato}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle className="card-title">BACHILLERATO</CardTitle>
								<CardText className="card-text">
								La Universidad Nacional Obrera ofrece el certificado de bachillerato general 
								en su oferta educativa, dirigido a jóvenes y adultos para que concluyan sus estudios 
								de bachillerato.
								</CardText>
								<CardText className="card-text">
								Reinsertarse dentro de un sistema educativo y productivo a todas aquellas personas
								que no culminaron sus estudios, y así obtengan su certificado de bachiller avalado 
								por la Secretaría de Educación Pública.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>							
								</CardText>
							</CardBody>
						</Card>
					</div>
					
					{/* Licenciaturas */}
					<div className="card-deck" ref={sectionLicenciatura}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card1} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="licenciatura-red">
								Sociales y Humanidades
								</div>
								<CardText className="card-text">
								En esta área te ofrecemos carreras en las que te puedes formar profesionalmente, 
								reforzando los valores humanos y las competencias de los principios pedagógicos 
								con los enfoques interdisciplinarios de las ciencias sociales para conocer, 
								interpretar, explicar e intervenir en los diferentes ámbitos de la vida social
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card2} top ></CardImg>
								<div className="licenciatura-blue">
								Salud
								</div>
								<CardText className="card-text">
								En esta área ofrecemos carreras en las que formamos profesionales comprometidos con
								la población de manera responsable, basándonos en los principios éticos que estas 
								carreras ameritan. Capaces de satisfacer las necesidades sanitarias, mejorando así 
								su calidad de vida, siendo un apoyo insustituible y fundamental en el área de 
								asistencia médica.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card3} top></CardImg>
								<div className="licenciatura-green">
								Ciencias Jurídicas
								</div>
								<CardText className="card-text">
								En esta área ofrecemos carreras en las que proporcionamos la educación en concordancia 
								para poder conocer las normas y leyes sociales en un estado de derecho, así como también 
								desarrollamos las destrezas necesarias desde el aspecto psicológico, social y científico 
								de un crimen para el buen desenvolvimiento del profesional. Brindamos una formación sustentada 
								por la sensibilidad, los valores éticos y la solidaridad social, sirviendo como apoyo al sistema 
								de justicia y actividad policial que les permita participar en el desarrollo del país.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card4} top></CardImg>
								<div className="licenciatura-brown">
								Negocios
								</div>
									<CardText className="card-text">
									El área de negocios te ofrece carreras que tienen el propósito de generar 
									conocimientos científicos en las ciencias administrativas, para poder desarrollar 
									capacidades potenciales y así fortalecer sus habilidades para que puedan contribuir 
									al buen desarrollo de la economía de la nación.
									</CardText>
							</CardBody>
						</Card>
					</div>
					{/* Maestrias */}
					<div className="card-deck" ref={sectionMaestrias}>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card10} top className = "maestry-img"></CardImg>
							<div className="div-black">
								MAESTRÍA EN EDUCACIÓN
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card11} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								MAESTRÍA EN GESTION DE NEGOCIOS
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card5} top className = "maestry-img"></CardImg>
							<div className="div-black">
								MAESTRÍA EN DERECHO PROCESAL PENAL
								</div>
							</CardBody>
						</Card>
						
					</div>
					<div className="card-deck" ref={sectionMaestrias}>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card9} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								MAESTRÍA EN CIENCIAS PENALES
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card8} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								MAESTRÍA EN ADMINISTRACIÓN PÚBLICA
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card7} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								ACUSATORIO
							</div>
							</CardBody>
						</Card>
						
					</div>
					{/* Doctorados */}
					<div className="card-deck" ref={sectionDoctorados}>
					<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card6} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								DOCTORADO EN EDUCACIÓN
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
						<CardBody>
							<CardImg alt="..." src= {card12} top className = "maestry-img"></CardImg>
							<div className="div-black">
								DOCTORADO EN ADMINISTRACION
							</div>
						</CardBody>
						</Card>
						<Card className = "maestry">
						<CardBody>
							<CardImg alt="..." src= {card10} top className = "maestry-img"></CardImg>
							<div className="div-black">
								DOCTORADO EN JUICIO ORAL PENAL
							</div>
						</CardBody>
						</Card>
					</div>
					{/* Convenios */}
					<div className="card-deck" ref={sectionConvenios}>
						<Card className="custom-card-deck">
							<CardBody>
								<div className="d-flex">
									<div className="rectangle-stns d-flex">
									<CardImg alt="..." src= {stns} className = "convenios-img-salud" top ></CardImg>
									</div>
								</div>
								<div className="div-black">
								Trabajadores de la salud
								</div>
								<CardText className = "convenios-text">
								La Universidad Nacional Obrera, a través del convenio firmado con el Sindicato de Trabajadores 
								del Sistema Nacional de Salud, invita a todos los trabajadores del sector salud de Michoacán 
								a realizar la nivelación de la licenciatura en enfermería, recibiendo los beneficios 
								establecidos en el convenio celebrado entre la UNO y el sindicato
									</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<div className="d-flex">
									<div className="rectangle-middle d-flex">
									<CardImg alt="..." src= {convenio} className="convenios-img" top  className = "convenios-img-educacion"></CardImg>
									</div>
								</div>
								<div className="div-black">
								Trabajadores de la educación
								</div>
								<CardText className = "convenios-text">
								La Universidad Nacional Obrera, a través del convenio firmado con el SNTE, ofrece a 
								todos los trabajadores del magisterio que cuenten con pasantía, o no hayan concluido 
								con el proceso de titulación de la licenciatura, maestría o doctorado en educación, 
								la posibilidad de titularse mediante trámite administrativo
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<div className="d-flex">
									<div className="rectangle-100">
										<h1 className="rectangle-text-one">SOY</h1>
										<h1 className="rectangle-text-two">100</h1>
									</div>
								</div>
								<div className="div-black">
								Trabajadores de seguridad
								</div>
								<CardText className = "convenios-text">
								La Universidad Nacional Obrera brinda a todos los miembros de la policía una 
								mano amiga para su formación estudiantil, y les ofrece a ellos y a sus familiares directos, 
								descuentos para cursar cualquier licenciatura, maestría y doctorado
								</CardText>
							</CardBody>
						</Card>
					</div>
					{/* Inscripciones */}
					<div className="card-deck" ref={sectionInscripciones}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody className="card-body-form">
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

export default StudiesCarrearsPage;