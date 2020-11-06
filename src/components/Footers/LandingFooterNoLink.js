/*eslint-disable*/
import React, {useState, useEffect } from "react";
import '../../assets/css/landing.css';
import logo from '../../assets/img/landing/logo.png';
import facebook from '../../assets/img/landing/Facebook.png';
import whatsapp from '../../assets/img/landing/WhatsApp.png';
import instagram from '../../assets/img/landing/Instagram.png';
import { useLocation  } from "react-router-dom";
// reactstrap components
import { Row, Col, Button, Collapse, NavItem  } from "reactstrap";
// core components

import { history } from '../../helpers';


function LandingFooterNoLink() {

	const location = useLocation();
	const [color, setColor] = useState('red-wine');
	//Manejo de colores del header de acuerdo a la url
	useEffect(() => {
		let page = location.pathname;
		
		if(page == '/sobre-la-universidad'){
			setColor('red-wine');
		}
		if(page == '/estudios'){
			setColor('brown');
		}
		if(page == '/cultura-y-extensiones'){
			setColor('green');
		}
		if(page == '/contacto'){
			setColor('blue');
		}
	}, [location]);

	const [collapses, setCollapses] = React.useState([]);
	const changeCollapse = collapse => {
	  if (collapses.includes(collapse)) {
			setCollapses(collapses.filter(prop => prop !== collapse));
	  	} else {
			setCollapses([...collapses, collapse]);
	  }
	};

	return (
		<>
		<footer className="footer footer-default footer-uno">
				<Row className="d-footer">
					<Col sm="3" className={"rrss "+color}>
						<div className="text-center">
							SÍGUENOS
						</div>
						<div className="text-center">
							<Button className="btn-link rrss-buttons">
								<img src={facebook} className="img-rss"></img>
							</Button>
							<Button className="btn-link rrss-buttons">
								<img src={whatsapp} className="img-rss"></img>
							</Button>
							<Button className="btn-link rrss-buttons">
								<img src={instagram} className="img-rss"></img>
							</Button>
						</div>
					</Col>
					<Col sm="8" className="middle-footer">
						<div className="d-flex"> 
							<div className="footer-about">
								<div className="footer-title">SOBRE LA UNIVERSIDAD</div>
								<Button className="btn-link footer-buttons">
								¿QUÉ ES UNO?
								</Button>
								<Button className="btn-link footer-buttons" >
								HISTORIA
								</Button>
								<Button className="btn-link footer-buttons">
								MISIÓN Y VISIÓN
								</Button>
								{/* <div>ORGANIGRAMA</div>
								<div>IDENTIDAD NACIONAL</div> */}
								<Button className="btn-link footer-buttons">
								UBICACIÓN DE LOS PLANTELES
								</Button>
							</div>				
							<div className="footer-about">
								<div className="footer-title">OFERTA ACADÉMICA</div>
								<Button className="btn-link footer-buttons" >
								BACHILLERATO
								</Button>
								<Button className="btn-link footer-buttons" >
								LICENCIATURA
								</Button>
								<Button className="btn-link footer-buttons" >
								MAESTRIAS
								</Button>
								<Button className="btn-link footer-buttons" >
								DOCTORADOS
								</Button>
								<Button className="btn-link footer-buttons">
								INSCRIPCIONES
								</Button>
								<Button className="btn-link footer-buttons">
								CONVENIOS
								</Button>
							</div>
							<div className="footer-about">
								<div className="footer-title">CULTURA Y EXTENSIÓN</div>
								<Button className="btn-link footer-buttons">
								REVISTA GERMINAL
								</Button>
								<Button className="btn-link footer-buttons">
								PROYECTO UNO
								</Button>
								<Button className="btn-link footer-buttons">
								EVENTOS
								</Button>
								<Button className="btn-link footer-buttons">
								FOROS
								</Button>
								<Button className="btn-link footer-buttons">
								CONGRESOS
								</Button>
								<Button className="btn-link footer-buttons">
								TALLERES
								</Button>
							</div>
							<div className="footer-about">
								<div className="footer-title">REVISTA GERMINAL</div>
							</div>
							<div className="footer-about f-contact">
							<Button className="btn-link footer-buttons footer-title">
								CONTACTO
								</Button>
							</div>
						</div>
					</Col>
					<Col sm= "1" className="my-auto">
						<div className="footer-enso">
							<img src={logo} className="enso-logo align-self-center"></img>
						</div>
					</Col>
				</Row>

				{/* Footer mobile */}
				<Row className="m-footer">
					<div className="f-menu">	
						<div aria-multiselectable={true} id="accordion" role="tablist" className="menu-tile">
							<a className="collapsed" data-parent="#accordion" className="m-item d-flex justify-content-between" href="#"
								aria-expanded={collapses.includes(1)} 
								onClick={e => { e.preventDefault(); changeCollapse(1);}}
							>
								Sobre La Universidad
								{collapses.includes(1) ? <i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}
							</a>
							<Collapse isOpen={collapses.includes(1)}>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> ¿Qué Es Uno? </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Historia </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Misión Y Visión </a>
								{/* <a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();}}
								> Organigrama </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();}}
								> Identidad Institucional </a> */}
							</Collapse>
							<a className="collapsed" data-parent="#accordion" className="m-item d-flex justify-content-between" href="#"
								aria-expanded={collapses.includes(2)} 
								>
								Oferta Académica
								{collapses.includes(2) ? <i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}
							</a>
							<Collapse isOpen={collapses.includes(2)}>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Bachillerato </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> Licenciatura </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> Maestrías </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Doctorados </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> Convenios </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Inscripciones </a>
							</Collapse>
							<a className="collapsed" data-parent="#accordion" className="m-item d-flex justify-content-between" href="#"
								aria-expanded={collapses.includes(3)} 
								
							>
								Cultura y Extensiones
								{collapses.includes(3) ? <i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}
							</a>
							<Collapse isOpen={collapses.includes(3)}>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> Revista Germinal </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> Proyecto UNO </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Eventos </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Foros </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#"
								> Congresos </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" 
								> Talleres </a>
							</Collapse>
						</div>
					</div>
				</Row>
				{/* End Footer mobile */}
		</footer>
		</>
	);
}

export default LandingFooterNoLink;
