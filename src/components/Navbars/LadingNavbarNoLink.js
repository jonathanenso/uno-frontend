/* eslint-disable */
import React, {useRef, useState, useEffect} from "react";
import { useLocation, NavLink  } from "react-router-dom";

// reactstrap components
import {
	Navbar,
	NavItem,
	Nav,
	Button,
} from "reactstrap";
import { history } from '../../helpers';
import '../../assets/css/header.css';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
	  	width,
	  	height
	};
}
  
function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
	getWindowDimensions()
	);

	useEffect(() => {
	function handleResize() {
		setWindowDimensions(getWindowDimensions());
	}

	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

function LandingNavbarNoLink() {

	const location = useLocation();

	const { height, width } = useWindowDimensions();
	const [openSubMenu, setOpenSubMenu] = useState(0);

	// Manejo de menu mobile
	const toggleSubMenu = (num) =>{
		if(openSubMenu == num){
			setOpenSubMenu(0);
		}else{
			setOpenSubMenu(num);
		}
	}

	
	//Color header y otros
	const [color, setColor] = useState('red-wine');
	const [colorBtn, setColorBtn] = useState('primary-wine');
	const [colorBtnSub, setColorBtnSub] = useState('mobile-wine');

	//Manejo de colores del header de acuerdo a la url
	useEffect(() => {
		let page = location.pathname;
		
		if(page == '/sobre-la-universidad'){
			setColor('red-wine');
			setColorBtn('primary-wine');
			setColorBtnSub('mobile-wine');
		}
		if(page == '/estudios'){
			setColor('brown');
			setColorBtn('primary-brown');
			setColorBtnSub('mobile-brown');
		}
		if(page == '/cultura-y-extensiones'){
			setColor('green');
			setColorBtn('primary-green');
			setColorBtnSub('mobile-green');
		}
		if(page == '/revista-germinal'){
			setColor('dark-brown');
			setColorBtn('primary-dark-brown');
			setColorBtnSub('mobile-dark-brown');
		}
		if(page == '/contacto'){
			setColor('blue');
			setColorBtn('primary-blue');
			setColorBtnSub('mobile-blue');
		}
	}, [location]);
	
	//Menu mobile
	const Menu = () => {
		return ( <>
			<div className="columnLeft">
				<Button block className="btn-round" color={colorBtn} onClick={()=>toggleSubMenu(1)}>
					SOBRE LA UNIVERSIDAD
				</Button>
				<Button block className="btn-round" color={colorBtn} onClick={()=>toggleSubMenu(2)}>
					OFERTA ACADÉMICA
				</Button>
				<Button block className="btn-round" color={colorBtn} onClick={()=>toggleSubMenu(3)}>
					CULTURA Y EXTENSIONES
				</Button>
				<Button block className="btn-round" color={colorBtn} onClick={()=>toggleSubMenu(4)}>
					REVISTA GERMINAL
				</Button>
				<Button block className="btn-round mb-menu" color={colorBtn} onClick={()=>toggleSubMenu(5)}>
					CONTACTO
				</Button>
			</div>
			{openSubMenu > 0 && <>
				<div className="columnRigth">
				{/* SOBRE LA UNIVERSIDAD */}
				{openSubMenu == 1 && <>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/sobre-la-universidad',
						state: { section: 'queesuno' }
       				});}}>
					¿QUÉ ES UNO?
					</Button>
					<Button block className="btn-round" color={colorBtnSub}  onClick={()=>{history.push({
						pathname: '/sobre-la-universidad',
						state: { section: 'historia' }
       				});}}>
						HISTORIA
					</Button>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/sobre-la-universidad',
						state: { section: 'mision' }
       				});}}>
						MISIÓN Y VISIÓN
					</Button>
{/* 					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{}}>
						ORGANIGRAMA
					</Button> */}
{/* 					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{}}>
						IDENTIDAD INSTITUCIONAL
					</Button> */}
					<Button block className="btn-round mb-menu" color={colorBtnSub} onClick={()=>{
						history.push({
							pathname: '/sobre-la-universidad',
							state: { section: 'ubicaciones' }
						});
					}}>
						UBICACIÓN DE LOS PLANTELES
					</Button>
				</>}
				{openSubMenu == 2 && <>
					{/* ESTUDIOS */}
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/estudios',
						state: { section: 'bachillerato' }
       				});}}>
						BACHILLERATO
					</Button>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/estudios',
						state: { section: 'licenciatura' }
       				});}}>
						LICENCIATURA
					</Button>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/estudios',
						state: { section: 'maestrias' }
       				});}}>
						MAESTRÍAS
					</Button>
					<Button block className="btn-round" color={colorBtnSub}  onClick={()=>{history.push({
						pathname: '/estudios',
						state: { section: 'doctorados' }
       				});}}>
						DOCTORADOS
					</Button>
					<Button block className="btn-round" color={colorBtnSub}  onClick={()=>{history.push({
						pathname: '/estudios',
						state: { section: 'convenios' }
       				});}}>
						CONVENIOS
					</Button>
					<Button block className="btn-round mb-menu" color={colorBtnSub}  onClick={()=>{history.push({
						pathname: '/estudios',
						state: { section: 'inscripciones' }
       				});}}>
						INSCRIPCIONES
					</Button>
				</>}
				{openSubMenu == 3 && <>
					{/* CULTURA Y EXTENSIONES */}
					{/* <Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'revista' }
       				});}}>
						REVISTA GERMINAL
					</Button> */}
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'proyectouno' }
       				});}}>
						PROYECTO UNO
					</Button>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'eventos' }
       				});}}>
						EVENTOS
					</Button>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'foros' }
       				});}}>
						FOROS
					</Button>
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'congresos' }
       				});}}>
						CONGRESOS
					</Button>
					<Button block className="btn-round mb-menu" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'talleres' }
       				});}}>
						TALLERES
					</Button>
				</>}

				{openSubMenu == 4 && <>
					{/* REVISTA GERMINAL */}
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/cultura-y-extensiones',
						state: { section: 'revista' }
       				});}}>
						REVISTA GERMINAL
					</Button>
				</>}
				{openSubMenu == 5 && <>
					{/* CONTACTO */}
					<Button block className="btn-round" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/contacto',
						state: { section: 'direcciones' }
       				});}}>
						DIRECCIONES
					</Button>
					<Button block className="btn-round mb-menu" color={colorBtnSub} onClick={()=>{history.push({
						pathname: '/contacto',
						state: { section: 'direcciones' }
       				});}}>
						TELÉFONOS
					</Button>
				</>}
			</div>
			</>
			}
			</>
		)
	}

	const [open, setOpen] = useState(false);

	useEffect(() => {
        if(width>991){
			setOpen(false);
        }
	},[width]);

	return (
		<>
			<Navbar className={"fixed-top "} color={color} expand="lg">
				
				<div className="d-flex content-nav">
					<button className="logo" onClick={()=>{history.push({pathname: '/'})}}>
						<div className={"uno-logo "+color}>
							<div className="d-flex">
								<div className="uno">
									<div style={{marginRight:5}}>UNO</div>
								</div>
								<div className="uno-des">
									<div>
										<div className="text-logo">UNIVERSIDAD</div>
										<div className="text-logo">NACIONAL</div>
										<div className="text-logo">OBRERA</div>
									</div>
								</div>
							</div>
						</div>
					</button>
					
					<div className="navbar-translate header-options">
						<div className="navbar-toggler navbar-toggler" aria-expanded={open}>
							<button onClick={() => setOpen(!open)} className="hamburger hamburger--slider" className={open ? 'hamburger hamburger--slider is-active':'hamburger hamburger--slider'}>
								<div className="hamburger-box">
									<div className="hamburger-inner"></div>
								</div>
							</button>
						</div>
						<Nav tabs className="menu-items">
							<NavItem className="menu-leaf">
								<NavLink to="#" className="nav-link">SOBRE LA UNIVERSIDAD</NavLink>
							</NavItem>
							<NavItem className="menu-leaf">
								<NavLink to="#" className="nav-link">OFERTA ACADÉMICA</NavLink>
							</NavItem>
							<NavItem className="menu-leaf">
								<NavLink to="#" className="nav-link">CULTURA Y EXTENSIONES</NavLink>
							</NavItem>
							<NavItem className="menu-leaf">
								<NavLink to="#" className="nav-link">REVISTA GERMINAL</NavLink>
							</NavItem>
							<NavItem className="menu-leaf">
								<NavLink to="#" className="nav-link">CONTACTO</NavLink>
							</NavItem>
						</Nav>
					</div>
				
				</div>
				{/* menu desplegable mobile */}
				<div id="flyoutMenu" className={open ? 'show':'hide'}>
					<Menu />
				</div>
			</Navbar>
    	</>
  	);
}

export default LandingNavbarNoLink;
