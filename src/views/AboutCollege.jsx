import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
// reactstrap components

import {
	Button,
	Container,
	Card, 
	CardText, 
	CardBody,
	CardTitle,
} from "reactstrap";

// core components
import LandingNavbar from "../components/Navbars/LandingNavbar";
import LandingFooter from "../components/Footers/LandingFooter";
import '../assets/css/landing.css';

import mapa from '../assets/img/landing/mapa.png';
import mapaGeneral from '../assets/img/landing/mapa-michoacan.jpg';
import punto from '../assets/img/landing/point.png';


/* import mapa from '../assets/img/landing/mapa-michoacan.jpg';
 */

function AboutCollegePage() {

	const location = useLocation();

	useEffect(() => {
			document.body.classList.add("landing-page");
			document.body.classList.add("sidebar-collapse");
			return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
	});

	const sectionUno = useRef(null);
	const sectionHistoria = useRef(null);
	const sectionMision = useRef(null)
	// const sectionOrganigrama = useRef(null)
	//const sectionIdentidad = useRef(null)
	const sectionPlanteles = useRef(null)

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

			if(section == 'queesuno'){
				scrollTo(sectionUno);
			}

			if(section == 'historia'){
				scrollTo(sectionHistoria);
			}

			if(section == 'mision'){
				scrollTo(sectionMision);
			}

			if(section == 'ubicaciones'){
				scrollTo(sectionPlanteles);
			}
		}
	}, [location]);

	const [scroll, setScroll] = useState('');

	const [optionOne, setOptionOne] = useState('');
	const [optionHistory, setOptionHistory] = useState('');
	const [optionMision, setOptionMision] = useState('');
	const [optionPlanteles, setOptionPlanteles] = useState('');

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
		const divSectionOne = sectionUno.current.offsetHeight-20;
		const divSectionHistoria = sectionHistoria.current.offsetHeight + divSectionOne-20;
		const divSectionMision = sectionMision.current.offsetHeight + divSectionHistoria-20;
		const divSectionPlanteles = sectionPlanteles.current.offsetHeight + divSectionMision-20;

		if(scroll >= 0 && scroll <= divSectionOne ){
			setOptionOne('active');
		}else{
			setOptionOne('');
		}
		if(scroll > divSectionOne && scroll <= divSectionHistoria ){
			setOptionHistory('active');
		}else{
			setOptionHistory('');
		}
		if(scroll > divSectionHistoria && scroll <= divSectionMision ){
			setOptionMision('active');
		}else{
			setOptionMision('');
		}
		if(scroll > divSectionMision && scroll <= divSectionPlanteles ){
			setOptionPlanteles('active');
		}else{
			setOptionPlanteles('');
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
							<Button block className="btn-round initial" color="primary-wine" onClick={e => e.preventDefault()} size="lg">
								SOBRE LA UNIVERSIDAD
							</Button>
						</div>
						<div className="send-button">
							<Button id="second" block className={"btn-round "+optionOne} color="wine" href="#queesuno" onClick={()=>scrollTo(sectionUno)} size="lg">
								¿QUÉ ES UNO?
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionHistory} color="wine" href="#historia" onClick={()=>scrollTo(sectionHistoria)} size="lg">
								HISTORIA
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionMision} color="wine" href="#mision" onClick={()=>scrollTo(sectionMision)} size="lg">
								MISIÓN Y VISIÓN
							</Button>
						</div>
						{/* <div className="send-button">
							<Button block className="btn-round" color="wine" href="#organigrama" onClick={()=>scrollTo(sectionOrganigrama)} size="lg">
								ORGANIGRAMA
							</Button>
						</div> */}
						{/* <div className="send-button">
							<Button block className="btn-round" color="wine" href="#identidadinstitucional" onClick={()=>scrollTo(sectionIdentidad)} size="lg">
								IDENTIDAD INSTITUCIONAL
							</Button>
						</div> */}
						<div className="send-button">
							<Button block className={"btn-round "+optionPlanteles} color="wine" href="#ubicaciones" onClick={()=>scrollTo(sectionPlanteles)} size="lg">
								UBICACIÓN DE LOS PLANTELES
							</Button>
						</div>
					</div>
				</div>
				<div className="col-lg-9 back-uno">
					<Container>
						<div className="card-deck section-about-uno" ref={sectionUno}>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle className= "card-title">¿QUIENES SOMOS?</CardTitle>
									<CardText className= "card-text">
									Somos una institución universitaria que ofrece estudios en licenciaturas, 
									maestrías y doctorados en diferentes áreas académicas, 
									con horarios flexibles, una excelente calidad educativa,
									planes de accesibles y con ello motivar a pertenecer a la gran familia UNO.
									</CardText>
									<CardText className= "card-text">
									Sin descuidar el trabajo del día a día, haciendo salud y educación en revolución 
									contamos con planteles en varios municipios del estado de Michoacán y con vistas 
									a expandirnos a todo México.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle></CardTitle>
									<CardText className="card-text-two" >
									Ofrecemos la oportunidad de obtener el certificado de estudios de nivel medio 
									superior mientras estudias las carreras de más alta demanda en nuestro país. 
									Siempre apuntado a la excelencia y preparándote para el campo laboral.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle></CardTitle>
									<CardText className= "card-text">
									</CardText>
								</CardBody>
							</Card>
						</div>
						
						<div className="card-deck" ref={sectionHistoria}>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle className= "card-title">HISTORIA</CardTitle>
									<CardText className= "card-text">
									La Universidad Nacional Obrera surge en Tepalcatepec Michoacán, 
									el día 13 de octubre del 2018. Con la motivación de llegar cada vez 
									a más personas que aspiran completar su educación formal.
									</CardText>
									<CardText className= "card-text">
									La UNO tiene como objetivo proporcionar a toda la población del Estado de Michoacán acceso 
									y participación a un sistema educativo de calidad, que facilite su incorporación al sistema 
									productivo nacional sin limitaciones, haciendo uso de su tiempo disponible, para que todo aquel 
									que quiera, pueda cumplir su etapa educativa mejorando su calidad de vida a corto y mediano plazo. 
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle></CardTitle>
									<CardText className= "card-text-two">
									Utilizando para ello el método andragógico, cuyo objetivo es el de trabajar con el propio saber 
									del estudiante para ampliarlo o administrarlo mejor.
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

						<div className="card-deck" ref={sectionMision}>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle className= "card-title">MISIÓN</CardTitle>
									<CardText className= "card-text">
									La Universidad Nacional Obrera es fundamentalmente una comunidad de intereses
									que reúne a profesores y estudiantes en la tarea de buscar el crecimiento y 
									afianzar la educación en todo ámbito y a la mayor población posible
									</CardText>
									<CardText className= "card-text">
									Para cumplir esta misión, sus actividades se dirigirán a crear, asimilar, enseñar y
									difundir el saber científico, tecnológico y humanístico, mediante la investigación, 
									el desarrollo, la innovación, la docencia y la extensión, organizándose funcionalmente 
									dentro de una estrecha identidad académica con el fin de formar los equipos profesionales 
									y técnicos para el desarrollo y progreso de la Nación y el Estado de Michoacán.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle className= "card-title">VISIÓN</CardTitle>
									<CardText className= "card-text">
									Queremos ser una universidad modelo, emblema de eficacia académica, referencia para la región y el país, 
									cuya autonomía académica, investigativa y de extensión, incentive al desarrollo del conocimiento y a la solución 
									de problemas del entorno educativo; con una infraestructura consolidada, un sistema de información dinámico, 
									inclusivo y una comunidad comprometida; con egresados que resalten en su profesión, comprometidos
									con el desarrollo científico, humanístico y artístico del entorno que les rodea.
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

						{/* <div className="card-deck" ref={sectionOrganigrama}>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle></CardTitle>
									<CardText>
									This is a wider card with supporting text below as a natural
									ead-in to additional content. This card has even longer content
									than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardText>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer content
									than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle>Bla bla</CardTitle>
									<CardText>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer content
									than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
						</div> */}

						{/* <div className="card-deck" ref={sectionIdentidad}>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle></CardTitle>
									<CardText>
									This is a wider card with supporting text below as a natural
									ead-in to additional content. This card has even longer content
									than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardText>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer content
									than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="custom-card-deck">
								<CardBody>
									<CardTitle>Bla bla</CardTitle>
									<CardText>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer content
									than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
						</div> */}

						<div className="card-deck" ref={sectionPlanteles}>
							<Card className="ubicacion-planteles">
								<CardBody>
								<img className="div-mapa-general-img" src={mapaGeneral} />
								<Link to={{ pathname: "https://goo.gl/maps/BXhobUK8j9feEFN48" }} target="_blank">
									<img className="eye" src={punto} />
								</Link>
								</CardBody>
							</Card>
						</div>
						<div className="card-deck" ref={sectionPlanteles}>
							<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/BXhobUK8j9feEFN48" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>MORELIA</h5>
									</div>

								</CardBody>
							</Card>
							<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/5pkJg2a52qY91tM58" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>COALCOMÁN</h5>
									</div>

								</CardBody>
							</Card>
							<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/zmqWLK5Dir8TZraq5" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>NUEVA ITALIA</h5>
									</div>

								</CardBody>
							</Card>
						</div>
						<div className="card-deck" ref={sectionPlanteles}>
						<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/4rXCRGXNQmnyBSZH7" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>TEPALCATEPEC</h5>
									</div>

								</CardBody>
							</Card>
							<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/ZhGoFf7BZcsDbrn6A" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>ZAMORA</h5>
									</div>

								</CardBody>
							</Card>
							<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/jWDBxKN7CASPntVM8" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>BUENA VISTA</h5>
									</div>

								</CardBody>
							</Card>
						</div>
						<div className="card-deck" ref={sectionPlanteles}>
						<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/FRhscpTRi9bgqefr8" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>APATZINGÁN</h5>
									</div>

								</CardBody>
							</Card>
							<Card className="ubicacion-planteles">
								<CardBody>
									<Link to={{ pathname: "https://goo.gl/maps/jy1G5znjiWhVBRyj8" }} target="_blank">
										<img className="div-mapa-img" src={mapa} />
									</Link>
									<div className="div-mapa-text">
										<h5>LOS REYES</h5>
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

export default AboutCollegePage;