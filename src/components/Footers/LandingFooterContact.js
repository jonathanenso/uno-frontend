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


function LandingFooterContact() {

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
		<footer className="footer footer-default footer-uno-contact">
				<Row className="d-footer">
					<Col sm="3" className={"rrss "+color}>
						<div className="text-center">
							SIGUENOS
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
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/sobre-la-universidad',
										state: { section: 'queesuno' }
									});
								}}>
								¿QUÉ ES UNO?
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/sobre-la-universidad',
										state: { section: 'historia' }
									});
								}}>
								HISTORIA
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/sobre-la-universidad',
										state: { section: 'mision' }
									});
								}}>
								MISIÓN Y VISIÓN
								</Button>
								{/* <div>ORGANIGRAMA</div>
								<div>IDENTIDAD NACIONAL</div> */}
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/sobre-la-universidad',
										state: { section: 'ubicaciones' }
									});
								}}>
								UBICACIÓN DE LOS PLANTELES
								</Button>
							</div>				
							<div className="footer-about">
								<div className="footer-title">ESTUDIOS</div>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/estudios',
										state: { section: 'bachillerato' }
									});
								}}>
								BACHILLERATO
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/estudios',
										state: { section: 'licenciatura' }
									});
								}}>
								LICENCIATURA
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/estudios',
										state: { section: 'maestrias' }
									});
								}}>
								MAESTRIAS
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/estudios',
										state: { section: 'doctorados' }
									});
								}}>
								DOCTORADOS
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/estudios',
										state: { section: 'inscripciones' }
									});
								}}>
								INSCRIPCIONES
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/estudios',
										state: { section: 'convenios' }
									});
								}}>
								CONVENIOS
								</Button>
							</div>
							<div className="footer-about">
								<div className="footer-title">CULTURA Y EXTENSIÓN</div>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/cultura-y-extensiones',
										state: { section: 'revista' }
									});
								}}>
								REVISTA GERMINAL
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/cultura-y-extensiones',
										state: { section: 'proyectouno' }
									});
								}}>
								PROYECTO UNO
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/cultura-y-extensiones',
										state: { section: 'eventos' }
									});
								}}>
								EVENTOS
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/cultura-y-extensiones',
										state: { section: 'foros' }
									});
								}}>
								FOROS
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/cultura-y-extensiones',
										state: { section: 'congresos' }
									});
								}}>
								CONGRESOS
								</Button>
								<Button className="btn-link footer-buttons" onClick={()=>{
									history.push({
										pathname: '/cultura-y-extensiones',
										state: { section: 'talleres' }
									});
								}}>
								TALLERES
								</Button>
							</div>
							<div className="footer-about">
								<div className="footer-title">PLATAFORMA UNO</div>
							</div>
							<div className="footer-about f-contact">
							<Button className="btn-link footer-buttons footer-title" onClick={()=>{
									history.push({
										pathname: '/contacto',
										state: { section: 'contacto' }
									});
								}}>
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
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault(); 
								history.push({
									pathname: '/sobre-la-universidad',
									state: { section: 'queesuno' }
								});
								}}
								> ¿Qué Es Uno? </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/sobre-la-universidad',
									state: { section: 'historia' }
								});
								}}
								> Historia </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/sobre-la-universidad',
									state: { section: 'mision' }
								});
								}}
								> Misión Y Visión </a>
								{/* <a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();}}
								> Organigrama </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();}}
								> Identidad Institucional </a> */}
							</Collapse>
							<a className="collapsed" data-parent="#accordion" className="m-item d-flex justify-content-between" href="#"
								aria-expanded={collapses.includes(2)} 
								onClick={e => { e.preventDefault(); changeCollapse(2);}}
							>
								Estudios
								{collapses.includes(2) ? <i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}
							</a>
							<Collapse isOpen={collapses.includes(2)}>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/estudios',
									state: { section: 'bachillerato' }
								});
								}}
								> Bachillerato </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/estudios',
									state: { section: 'licenciatura' }
								});
								}}
								> Licenciatura </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/estudios',
									state: { section: 'maestrias' }
								});
								}}
								> Maestrías </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/estudios',
									state: { section: 'doctorados' }
								});
								}}
								> Doctorados </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/estudios',
									state: { section: 'convenios' }
								});
								}}
								> Convenios </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/estudios',
									state: { section: 'inscripciones' }
								});
								}}
								> Inscripciones </a>
							</Collapse>
							<a className="collapsed" data-parent="#accordion" className="m-item d-flex justify-content-between" href="#"
								aria-expanded={collapses.includes(3)} 
								onClick={e => { e.preventDefault(); changeCollapse(3);}}
							>
								Cultura y Extensiones
								{collapses.includes(3) ? <i className="fa fa-angle-down" aria-hidden="true"></i>:<i className="fa fa-angle-up" aria-hidden="true"></i>}
							</a>
							<Collapse isOpen={collapses.includes(3)}>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/cultura-y-extensiones',
									state: { section: 'revista' }
								});
								}}
								> Revista Germinal </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/cultura-y-extensiones',
									state: { section: 'proyectouno' }
								});
								}}
								> Proyecto UNO </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/cultura-y-extensiones',
									state: { section: 'eventos' }
								});
								}}
								> Eventos </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/cultura-y-extensiones',
									state: { section: 'foros' }
								});
								}}
								> Foros </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/cultura-y-extensiones',
									state: { section: 'congresos' }
								});
								}}
								> Congresos </a>
								<a className="collapsed" className="m-item m-child d-flex" href="#" onClick={e => { e.preventDefault();
								history.push({
									pathname: '/cultura-y-extensiones',
									state: { section: 'talleres' }
								});
								}}
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

export default LandingFooterContact;
