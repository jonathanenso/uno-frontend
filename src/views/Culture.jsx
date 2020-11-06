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

function CultureExtensionsPage() {

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
	const sectionProyecto = useRef(null);
	const sectionEventos = useRef(null);
	const sectionForos = useRef(null);
	const sectionCongresos = useRef(null);
	const sectionTalleres = useRef(null);

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

/* 			if(section == 'revista'){
				scrollTo(sectionRevista);
			}
 */

			if(section == 'proyectouno'){
				scrollTo(sectionProyecto);
			}


			if(section == 'eventos'){
				scrollTo(sectionEventos);
			}


			if(section == 'foros'){
				scrollTo(sectionForos);
			}

			if(section == 'congresos'){
				scrollTo(sectionCongresos);
			}

			if(section == 'talleres'){
				scrollTo(sectionTalleres);
			}
		}
	}, [location]);

	const [scroll, setScroll] = useState('');

/* 	const [optionRevista, setOptionRevista] = useState('');
 */	const [optionProyecto, setOptionProyecto] = useState('');
	const [optionEventos, setOptionEventos] = useState('');
	const [optionForos, setOptionForos] = useState('');
	const [optionCongresos, setOptionCongresos] = useState('');
	const [optionTalleres, setOptionTalleres] = useState('');
	
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
/* 		const divSectionRevista = sectionRevista.current.offsetHeight-20;
 */		const divSectionProyecto = sectionProyecto.current.offsetHeight-20;
		const divSectionEventos = sectionEventos.current.offsetHeight + divSectionProyecto-20;
		const divSectionForos = sectionForos.current.offsetHeight + divSectionEventos-20;
		const divSectionCongresos = sectionCongresos.current.offsetHeight + divSectionForos-20;
		const divSectionTalleres = sectionTalleres.current.offsetHeight + divSectionCongresos-20;


		

		/* if(scroll >= 0 && scroll <= divSectionRevista ){
			setOptionRevista('active');
		}else{
			setOptionRevista('');
		} */
		if(scroll >= 0 && scroll <= divSectionProyecto ){
			setOptionProyecto('active');
		}else{
			setOptionProyecto('');
		}
		if(scroll > divSectionProyecto && scroll <= divSectionEventos ){
			setOptionEventos('active');
		}else{
			setOptionEventos('');
		}
		if(scroll > divSectionEventos && scroll <= divSectionForos ){
			setOptionForos('active');
		}else{
			setOptionForos('');
		}
		if(scroll > divSectionForos && scroll <= divSectionCongresos ){
			setOptionCongresos('active');
		}else{
			setOptionCongresos('');
		}
		if(scroll > divSectionCongresos && scroll <= divSectionTalleres ){
			setOptionTalleres('active');
		}else{
			setOptionTalleres('');
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
							<Button block className="btn-round initial" color="primary-green" onClick={e => e.preventDefault()} size="lg">
								CULTURA Y EXTENSIONES
							</Button>
						</div>
					{/* 	<div className="send-button">
                            <Button block className={"btn-round "+optionRevista} color="green" href="#revista" onClick={()=>scrollTo(sectionRevista)} size="lg">
								REVISTA GERMINAL
							</Button>
						</div> */}
						<div className="send-button">
                            <Button block className={"btn-round "+optionProyecto} color="green" href="#proyectouno" onClick={()=>scrollTo(sectionProyecto)} size="lg">
								PROYECTO UNO
							</Button>
						</div>
						<div className="send-button">
                            <Button block className={"btn-round "+optionEventos} color="green" href="#eventos" onClick={()=>scrollTo(sectionEventos)} size="lg">
								EVENTOS
							</Button>
						</div>
						<div className="send-button">
                            <Button block className={"btn-round "+optionForos} color="green" href="#foros" onClick={()=>scrollTo(sectionForos)} size="lg">
								FOROS
							</Button>
						</div>
						<div className="send-button">
                            <Button block className={"btn-round "+optionCongresos} color="green" href="#congresos" onClick={()=>scrollTo(sectionCongresos)} size="lg">
								CONGRESOS
							</Button>
						</div>
						<div className="send-button">
                            <Button block className={"btn-round "+optionTalleres} color="green" href="#talleres" onClick={()=>scrollTo(sectionTalleres)} size="lg">
								TALLERES
							</Button>
						</div>
					</div>
				</div>
				<div className="col-lg-9 back-uno">
				<Container>
					{/* Revista Germinal */}

				{/* 	<div className="card-deck" ref={sectionRevista}>
						<div className="magazine-mobile">
								<CarouselCultura />
						</div>
						<Card className="card-deck-culture" style={{ paddingTop: "80px"}}>
							<CardBody>
								
								<CarouselCultura />
							</CardBody>
						</Card>
					</div> */}
					{/* Proyecto UNO */}
					<div className="card-deck" ref={sectionProyecto}>
						<div className="proyecto-mobile">
						<CarouselCultura />
						</div>
						<Card className="card-deck-culture" style={{ paddingTop: "80px"}}>
							<CardBody>
								{/* Carousel */}
								<CarouselCultura />
							</CardBody>
						</Card>
					</div>
					{/* Eventos */}
					<div className="card-deck" ref={sectionEventos}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle>Eventos</CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								ead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
					</div>
					{/* Foros */}
					<div className="card-deck" ref={sectionForos}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle>Foros</CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								ead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
					</div>
					{/* Congresos */}
					<div className="card-deck" ref={sectionCongresos}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle>Congresos</CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								ead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
					</div>
					{/* Talleres */}
					<div className="card-deck" ref={sectionTalleres}>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle>Talleres</CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								ead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
								</CardText>
							</CardBody>
						</Card>
						<Card className="custom-card-deck">
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This card has even longer content
								than the first to show that equal height action.
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

export default CultureExtensionsPage;