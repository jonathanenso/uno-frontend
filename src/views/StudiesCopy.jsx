import React, { useEffect, useRef } from "react";

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
import '../assets/css/landing.css';
import card1 from '../assets/img/landing/1137.png';
import card2 from '../assets/img/landing/1138.png';
import card3 from '../assets/img/landing/504419-PHS4G9-800.png';
import card4 from '../assets/img/landing/O6JTUC0.png';
import card5 from '../assets/img/landing/627.png';
import card6 from '../assets/img/landing/61.png';
import card7 from '../assets/img/landing/62.png';
import card8 from '../assets/img/landing/63.png';
import card9 from '../assets/img/landing/64.png';
import card10 from '../assets/img/landing/doc1.png';
import card11 from '../assets/img/landing/doc2.png';
import stns from '../assets/img/landing/stsns.png';
import convenio from '../assets/img/landing/convenio.png';


function StudiesPage() {

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


	const scrollTo = (ref) => {
		window.scroll({
		  top: ref.current.offsetTop,
		  behavior: "smooth",
		});
	  };
	

	return (
		<>
		{/* NavBar */}
		<LandingNavbar />
		<div className="wrapper">
			<div className="row">
				{/* Menu lateral */}
				
				<div className="col-lg-3 back-uno-contact">
					<Container className="sticky-top menu-uno">

					<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								onClick={e => e.preventDefault()}
								size="lg"
							>
								Estudios
							</Button>

						</div>
						<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								onClick={()=>scrollTo(sectionBachillerato)}
								size="lg"
							>
								Bachillerato
							</Button>

						</div>
						<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								href="#pablo"
								onClick={()=>scrollTo(sectionLicenciatura)}
								size="lg"
							>
								Licenciatura
							</Button>
						</div>
						<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								href="#pablo"
								onClick={e => e.preventDefault()}
								size="lg"
							>
								Maestrías
							</Button>
						</div>
						<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								href="#pablo"
								onClick={e => e.preventDefault()}
								size="lg"
							>
								Doctorados
							</Button>
						</div>
						<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								href="#pablo"
								onClick={e => e.preventDefault()}
								size="lg"
							>
								Conveníos
							</Button>
						</div>
						<div className="send-button">
							<Button
								block
								className="btn-round"
								color="info"
								href="#pablo"
								onClick={e => e.preventDefault()}
								size="lg"
							>
								Inscripciones
							</Button>
						</div>
						
					</Container>
				</div>
				<div className="col-lg-9 back-uno-contact">
				<Container>
					<div ref={sectionBachillerato} className="section section-about-us" >
						<div className="card-deck">
							<Card className="" style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardTitle></CardTitle>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="" style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardTitle>Card title</CardTitle>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="" style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardTitle>Bla bla</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer content
									than the first to show that equal height action.
								</CardText>
								</CardBody>
							</Card>
							<Card className="" style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardTitle>Bla bla</CardTitle>
								<CardText>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This card has even longer content
									than the first to show that equal height action.
								</CardText>
								</CardBody>
							</Card>
						</div>
						{/* Licenciaturas */}

						<div ref={sectionLicenciatura} className="card-deck" style = {{marginTop: "80px"}}>
							<Card style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg
										alt="..."
										src= {card1}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										size="sm"
										onClick={(e) => e.preventDefault()}
									>
									Sociales y humanidades
									</Button>
									<CardTitle>Que es Uno</CardTitle>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg
									alt="..."
									src= {card2}
									top
									></CardImg>
									<Button
									color="info"
									className="btn-round"
									href="#pablo"
									size="sm"
									onClick={(e) => e.preventDefault()}
									>
									Salud
									</Button>
									<CardTitle>Card title</CardTitle>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg
										alt="..."
										src= {card3}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										size="sm"
										onClick={(e) => e.preventDefault()}
									>
									Ciencias Jurídicas
									</Button>
									<CardTitle>Bla bla</CardTitle>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card style = {{minHeight: "600px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
									alt="..."
									src= {card4}
									top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
									>
									Negocios
									</Button>
									<CardTitle>Bla bla</CardTitle>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
						</div>
						{/* Maesttrias */}
						<div className="card-columns" style = {{marginTop: "80px"}}>
							<Card  style = {{marginLeft: "-11px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card5}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Maestría en educación
									</Button>
								</CardBody>
							</Card>
							<Card style = {{borderRadius: "20px", marginLeft: "-5px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card6}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Maestria en gestión de negocios
									</Button>
								</CardBody>
							</Card>
							<Card style = {{ borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card7}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Maestría en derecho procesal penal
									</Button>
								</CardBody>
							</Card>
						</div>
						<div className="card-columns" style = {{marginTop: "30px"}}>
							<Card style = {{marginLeft: "-11px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card8}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Maestría en ciencias penales
									</Button>
								</CardBody>
							</Card>
							<Card style = {{marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card9}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Maestría en administración pública
									</Button>
								</CardBody>
							</Card>
						</div>
						{/* Doctorados */}
						<div className="card-columns" style = {{marginTop: "80px"}}>
							<Card style = {{marginLeft: "-11px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card10}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Doctorado en educación
									</Button>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card style = {{marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
										alt="..."
										src= {card11}
										top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Trabajadores de la salud
									</Button>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
						</div>
						{/* Convenios */}
						<div className="card-deck" style = {{marginTop: "80px"}}>
							<Card className="" style = {{minHeight: "400px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
										<CardImg 
											alt="..."
											src= {stns}
											top
										></CardImg>
										<Button
											color="info"
											className="btn-round"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
											>
											Trabajadores de la salud
										</Button>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="" style = {{minHeight: "400px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
									<CardImg 
											alt="..."
											src= {convenio}
											top
									></CardImg>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Trabajadores de la educación
									</Button>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
							<Card className="text-center" style = {{minHeight: "400px",  marginLeft: "2px", borderRadius: "20px"}}>
								<CardBody>
								<CardTitle>SOY 100</CardTitle>
									<Button
										color="info"
										className="btn-round"
										href="#pablo"
										onClick={(e) => e.preventDefault()}
										>
										Trabajadores de la seguridad
									</Button>
									<CardText>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This card has even longer content
										than the first to show that equal height action.
									</CardText>
								</CardBody>
							</Card>
						</div>


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