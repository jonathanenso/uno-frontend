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
import card1 from '../assets/img/landing/Derecho2.jpg';
import card2 from '../assets/img/landing/criminologia.jpg';
import card3 from '../assets/img/landing/enfermeria2.jpg';
import card4 from '../assets/img/landing/psicologia2.jpg';
import card5 from '../assets/img/landing/pedagogia2.jpg';
import card6 from '../assets/img/landing/contador2.jpg';
import card7 from '../assets/img/landing/administracion2.jpg';
import card8 from '../assets/img/landing/criminologia.jpg';
import card9 from '../assets/img/landing/M- educacion.jpg';
import card10 from '../assets/img/landing/M-Cienciaspenales2.jpg';
import card11 from '../assets/img/landing/M-derechoprocesalacusatorio2.jpg';
import card12 from '../assets/img/landing/M- Gestion de negocios.jpg';
import card13 from '../assets/img/landing/M- administracion publica.jpg';
import card14 from '../assets/img/landing/M-gestionyadministracionensaludpublica.jpg';
import card15 from '../assets/img/landing/M-comercializacionydesarrollo de imagen.jpg';
import card16 from '../assets/img/landing/doctoradoeducación.jpg';
import card17 from '../assets/img/landing/Doctoradoadministracion.jpg';
import card18 from '../assets/img/landing/Doctorado-Juicio-oralpenal.jpg';
import stns from '../assets/img/landing/stsns.png';
import convenio from '../assets/img/landing/convenio.png';




function StudiesPage() {

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
	const sectionLicenciaturatwo = useRef(null);
	const sectionMaestrias = useRef(null);
	const sectionMaestriasTwo = useRef(null);
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

	const [scroll, setScroll] = useState('');

	const [optionBachillerato, setOptionBachillerato] = useState('');
	const [optionLicenciatura, setOptionLicenciatura] = useState('');
	const [optionLicenciaturaTwo, setOptionLicenciaturaTwo] = useState('');
	const [optionMaestria, setOptionMaestria] = useState('');
	const [optionMaestriaTwo, setOptionMaestriaTwo] = useState('');
	const [optionDoctorado, setOptionDoctorado] = useState('');
	const [optionConvenios, setOptionConvenios] = useState('');
	const [optionIncripciones, setOptionIncripciones] = useState('');




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
		const divSectionBachillerato = sectionBachillerato.current.offsetHeight-20;
		const divSectionLicenciatura = sectionLicenciatura.current.offsetHeight + divSectionBachillerato-20;
		const divSectionLicenciaturaTwo = sectionLicenciaturatwo.current.offsetHeight + divSectionLicenciatura-20;
		const divSectionMaestria = sectionMaestrias.current.offsetHeight + divSectionLicenciaturaTwo-20;
		const divSectionMaestriaTwo = sectionMaestriasTwo.current.offsetHeight + divSectionMaestria-20;
		const divSectionDoctorado = sectionDoctorados.current.offsetHeight + divSectionMaestriaTwo-20;
		const divSectionConvenio = sectionConvenios.current.offsetHeight + divSectionDoctorado-20;
		const divSectionInscripcion = sectionInscripciones.current.offsetHeight + divSectionConvenio-20;



		if(scroll >= 0 && scroll <= divSectionBachillerato ){
			setOptionBachillerato('active');
		}else{
			setOptionBachillerato('');
		}
		if(scroll > divSectionBachillerato && scroll <= divSectionLicenciaturaTwo ){
			setOptionLicenciaturaTwo('active');
		}else{
			setOptionLicenciaturaTwo('');
		}
		if(scroll > divSectionLicenciaturaTwo && scroll <= divSectionMaestriaTwo ){
			setOptionMaestriaTwo('active');
		}else{
			setOptionMaestriaTwo('');
		}
		if(scroll > divSectionMaestriaTwo && scroll <= divSectionDoctorado ){
			setOptionDoctorado('active');
		}else{
			setOptionDoctorado('');
		}
		if(scroll > divSectionDoctorado && scroll <= divSectionConvenio ){
			setOptionConvenios('active');
		}else{
			setOptionConvenios('');
		}
		if(scroll > divSectionConvenio && scroll <= divSectionInscripcion ){
			setOptionIncripciones('active');
		}else{
			setOptionIncripciones('');
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
							<Button block className="btn-round initial" color="primary-brown" href="#" onClick={e => e.preventDefault()} size="lg">
								OFERTA ACADÉMICA
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionBachillerato} color="brown" href="#bachillerato" onClick={()=>scrollTo(sectionBachillerato)} size="lg">
								BACHILLERATO
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionLicenciaturaTwo} color="brown" href="#licenciatura" onClick={()=>scrollTo(sectionLicenciatura)} size="lg">
								LICENCIATURAS
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionMaestriaTwo} color="brown" href="#maestrias" onClick={()=>scrollTo(sectionMaestrias)} size="lg">
								MAESTRÍAS
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionDoctorado} color="brown" href="#doctorados" onClick={()=>scrollTo(sectionDoctorados)} size="lg">
								DOCTORADOS
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionConvenios} color="brown" href="#convenios" onClick={()=>scrollTo(sectionConvenios)} size="lg">
								CONVENIOS
							</Button>
						</div>
						<div className="send-button">
							<Button block className={"btn-round "+optionIncripciones} color="brown" href="#incripciones" onClick={()=>scrollTo(sectionInscripciones)} size="lg">
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
								<CardText className="card-text">
								La Universidad Nacional Obrera en coordinación con la Secretaría de Educación Pública (SEP), 
								evalúa el conjunto de conocimientos básicos en las distintas áreas del conocimiento humano, 
								como la Introducción a las Ciencias Sociales, Taller de Redacción, Geografía, Ecología y 
								Medio Ambiente, Matemáticas, Informática, Química, Inglés, Historia, Biología, Literatura, 
								Métodos de Investigación, Estructura Socioeconómica de México,  Individuo y Sociedad, 
								Epistemología, Ciencias Políticas, Derecho, Filosofía, Ciencias de la Comunicación y Psicología.
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
								<div className="licenciatura-derecho">
								Derecho
								</div>
								<CardText className="card-text">
								El Licenciado en Derecho define los procesos legales y restricciones que se traducen en articulados
								y cláusulas utilizadas para juzgar, condenar y/o defender a los individuos dentro del sistema social.
								</CardText>
								<CardText className="card-text">
								Su misión como abogado es hacer que la ley satisfaga las necesidades jurídicas del individuo 
								dentro de la sociedad, ante las cuales hace valer los derechos de las personas y del Estado.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card2} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="licenciatura-criminologia">
								Criminología y criminalística
								</div>
								<CardText className="card-text">
								El Licenciado en Pedagogía se ocupa de la planificación, diseño, producción y desarrollo de 
								medios y materiales instruccionales para la enseñanza teórica y práctica.Recoge, organiza y 
								proporciona información educativa y ocupacional. Asesora al individuo en la toma de decisiones 
								frente a su vida estudiantil y profesional.
								</CardText>
								<CardText className="card-text">
								Es un profesional que se desempeña en el área de investigación del delito en lo referente al 
								descubrimiento, individualización e identificación, y asegura las pruebas necesarias para la 
								aplicación de la ley. Organiza, coordina y supervisa grupos a su cargo.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card3} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="licenciatura-enfermeria">
								Enfermería
								</div>
								<CardText className="card-text">
								El Licenciado en Enfermería está preparado para desempeñarse en las instituciones de salud 
								y niveles de atención hospitalaria dispensando cuidados, tratamientos o medicamentos prescritos
								por el médico, observando el estado general del paciente
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card4} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="licenciatura-psicologia">
								Psicología
								</div>
								<CardText className="card-text">
								El Licenciado en Psicología estudia científicamente el quehacer humano en los ámbitos psicosociales, 
								psicodinámicos, institucionales y comunitarios. Investiga, diagnostica y orienta individual o
								grupalmente.
								</CardText>
								<CardText className="card-text">
								Diseña y emplea diferentes técnicas para formular diagnóstico, pronóstico y recomendar el tiempo de
								tratamiento a seguir. Investiga los problemas relacionados con el crecimiento y desarrollo de los 
								aspectos emocional, mental, físico y social de los individuos para comprender los orígenes de su 
								conducta.
								</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="card-deck" ref={sectionLicenciaturatwo}  >
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card5} top></CardImg>
								<div className="licenciatura-pedagogia">
								Pedagogía
								</div>
									<CardText className="card-text">
									El Licenciado en Pedagogía se ocupa de la planificación, diseño, producción y desarrollo de
									medios y materiales instruccionales para la enseñanza teórica y práctica.
									</CardText>
									<CardText className="card-text">
									Recoge, organiza y proporciona información educativa y ocupacional. Asesora al individuo en 
									la toma de decisiones frente a su vida estudiantil y profesional.
									</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card6} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="licenciatura-contaduria">
								Contaduría y Finanzas
								</div>
								<CardText className="card-text">
								El Licenciado en Contaduría y Finanzas dirige los servicios de contabilidad y asesora sobre los 
								problemas de contabilidad a particulares, empresas e instituciones. Interviene en la elaboración
								de la política presupuestaria, asesora en problemas financieros, contabilidad administrativa y
								organizativa.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardImg alt="..." src= {card7} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="licenciatura-administracion">
								Administración de Empresas
								</div>
								<CardText className="card-text">
								El Licenciado en Administración de Empresas, estudia y analiza los problemas organizacionales 
								y funcionales de la empresa, para ofrecer alternativas que faciliten la toma de decisiones.
								social
								</CardText>
								<CardText className="card-text">
								Planifica, organiza y controla las tareas de las actividades específicas de la empresa u oficina 
								para lograr un elevado rendimiento, interviene en la reforma, estudio y aplicación de sistemas y 
								procedimientos administrativos de la empresa.
								</CardText>
							</CardBody>
						</Card>
					</div>
					{/* Maestrias */}
					<div className="card-deck" ref={sectionMaestrias}>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card9} top className = "maestry-img"></CardImg>
							<div className="div-black">
								MAESTRÍA EN EDUCACIÓN
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card10} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								MAESTRÍA EN CIENCIAS PENALES
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card11} top className = "maestry-img"></CardImg>
							<div className="div-black">
								MAESTRÍA EN DERECHO PROCESAL ACUSATORIO
								</div>
							</CardBody>
						</Card>
						
					</div>
					<div className="card-deck" ref={sectionMaestriasTwo}> 
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card12} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								MAESTRÍA EN ADMINISTRACIÓN DE NEGOCIOS
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card13} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								MAESTRIA EN ADMINISTRACIÓN PÚBLICA
							</div>
							</CardBody>
						</Card>
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card14} top className = "maestry-img"></CardImg>
							<div className="div-black">
								MAESTRÍA EN GESTIÓN Y ADMINISTRACIÓN EN SALUD PÚBLICA 
								</div>
							</CardBody>
						</Card>
						
					</div>
					<div className="card-deck">
						<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card15} top className = "maestry-img"></CardImg>
							<div className="div-black">
								MAESTRÍA EN COMERCIALIZACIÓN Y DESARROLLO DE MERCADOS
								</div>
							</CardBody>
						</Card>
					</div>
					{/* Doctorados */}
					<div className="card-deck" ref={sectionDoctorados}>
					<Card className = "maestry">
							<CardBody>
							<CardImg alt="..." src= {card16} top className = "maestry-img" ></CardImg>
							<div className="div-black">
								DOCTORADO EN EDUCACIÓN
								</div>
							</CardBody>
							
						</Card>
						<Card className = "maestry">
						<CardBody>
							<CardImg alt="..." src= {card17} top className = "maestry-img"></CardImg>
							<div className="div-black">
								DOCTORADO EN ADMINISTRACION
							</div>
						</CardBody>
						</Card>
						<Card className = "maestry">
						<CardBody>
							<CardImg alt="..." src= {card18} top className = "maestry-img"></CardImg>
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
								<CardImg alt="..." src= {card1} style= {{borderRadius:"20px"}}  top ></CardImg>
								<div className="inscripciones">
								Requisitos
								</div>
								<CardTitle>Licenciatura</CardTitle>
								<CardText>
								<div style= {{textAlign:"left"}}>
									<li>Acta de nacimiento original</li>
									<li>Certificado de estudios (si lo tiene)</li>
									<li>Comprobante de domicilio</li>
									<li>CURP</li>
									<li>Identificación oficial con fotografía</li>
									<li>8 fotografías tamaño infantil en estudio.</li>
								</div>
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle>Maestría</CardTitle>
								<CardText>
								<div style= {{textAlign:"left"}}>
									<li>Acta de nacimiento original</li>
									<li>Certificado de estudios (si lo tiene)</li>
									<li>Comprobante de domicilio</li>
									<li>CURP</li>
									<li>Identificación oficial con fotografía</li>
									<li>8 fotografías tamaño infantil en estudio.</li>
								</div>
								</CardText>
								<CardTitle>Doctorado</CardTitle>
								<CardText>
								<div style= {{textAlign:"left"}}>
									<li>Acta de nacimiento original</li>
									<li>Certificado de estudios (si lo tiene)</li>
									<li>Comprobante de domicilio</li>
									<li>CURP</li>
									<li>Identificación oficial con fotografía</li>
									<li>8 fotografías tamaño infantil en estudio.</li>
								</div>
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle>Nivelación</CardTitle>
								<CardTitle>Enfermería</CardTitle>
								<CardText>
								<div style= {{textAlign:"left"}}>
									<li>Acta de nacimiento original</li>
									<li>CURP</li>
									<li>INE</li>
									<li>Certificado de técnico en enfermería, bachillerato tecnológico 
									en enfermería o algún estudio afín.
									</li>
								</div>
								</CardText>
								<CardTitle>Trabajo Social</CardTitle>
								<CardText>
								<div style= {{textAlign:"left"}}>
									<li>Acta de nacimiento original</li>
									<li>CURP</li>
									<li>Credencial de Elector</li>
									<li>Comprobante de Domicilio</li>
									<li>Carta de sindicato</li>
									<li>Constancia de la Clínica donde Trabaja</li>
									<li>Constancia de Estudio</li>
								</div>
								</CardText>
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

export default StudiesPage;