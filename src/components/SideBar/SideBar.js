/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// reactstrap components
import {
	Collapse,
} from "reactstrap";
import { useLocation, NavLink  } from "react-router-dom";
//Menu lateral en admin
function SideBar() {

	const location = useLocation();
	const user = useSelector(state => state.authentication.user);

	// collapse states and functions
	const [collapses, setCollapses] = useState([]);

	const changeCollapse = collapse => {

		if (collapses.includes(collapse)) {
			setCollapses(collapses.filter(prop => prop !== collapse));
		} else {
			setCollapses([...collapses, collapse]);
		}

	};

    useEffect(() => {
		
		let page = location.pathname;

		if(page === "/agency" ||  page === "/register-agency"){
			changeCollapse(1);
		}

		if(page === "/career" ||  page === "/register-career"){
			changeCollapse(2);
		}

		if(page === "/matter" ||  page === "/register-matter"){
			changeCollapse(3);
		}

		if(page === "/teacher" ||  page === "/register-teacher" ||  page === "/teacher-matter"){
			changeCollapse(4);
		}
    }, [location]);
	return (
		<>
			<div className="bg-light border-right" id="sidebar-wrapper">
				<div className="sidebar-heading"><NavLink to="/home">UNO</NavLink></div>

				<div className="list-group list-group-flush" >
					<div aria-multiselectable={true} id="accordion" role="tablist">
						{user.role == 1 && 
							<>
								{/* Sedes */}
								<a aria-expanded={collapses.includes(1)} className="list-group-item bg-light menu-title"
									data-parent="#accordion"
									href="#"
									id="collapseOne"
									onClick={e => {
										e.preventDefault();
										changeCollapse(1);
									}}
								>
									<i className="fa fa-building" aria-hidden="true"></i> Sedes
								</a>
								<Collapse isOpen={collapses.includes(1)}>
									<NavLink to="/agency" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-list" aria-hidden="true"></i> Lista
									</NavLink>
									<NavLink to="/register-agency" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-plus-circle" aria-hidden="true"></i> Añadir
									</NavLink>
								</Collapse>

								{/* Carreras */}
								<a aria-expanded={collapses.includes(2)} className="list-group-item bg-light menu-title"
									data-parent="#accordion"
									href="#"
									id="collapseOne"
									onClick={e => {
										e.preventDefault();
										changeCollapse(2);
									}}
								>
									<i className="fa fa-university" aria-hidden="true"></i> Carreras
								</a>
								<Collapse isOpen={collapses.includes(2)}>
									<NavLink to="/career" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-list" aria-hidden="true"></i> Lista
									</NavLink>
									<NavLink to="/register-career" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-plus-circle" aria-hidden="true"></i> Añadir
									</NavLink>
								</Collapse>

								{/* Materias */}
								<a aria-expanded={collapses.includes(3)} className="list-group-item bg-light menu-title"
									data-parent="#accordion"
									href="#"
									id="collapseOne"
									onClick={e => {
										e.preventDefault();
										changeCollapse(3);
									}}
								>
									<i className="fa fa-book" aria-hidden="true"></i> Materias
								</a>
								<Collapse isOpen={collapses.includes(3)}>
									<NavLink to="/matter" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-list" aria-hidden="true"></i> Lista
									</NavLink>
									<a href="#" className="list-group-item list-group-item-action bg-light">Horarios</a>
								</Collapse>

								{/* Docentes */}	
								<a aria-expanded={collapses.includes(4)} className="list-group-item bg-light menu-title"
									data-parent="#accordion"
									href="#"
									id="collapseOne"
									onClick={e => {
										e.preventDefault();
										changeCollapse(4);
									}}
								>
									<i className="fa fa-address-card" aria-hidden="true"></i> Docentes
								</a>
								<Collapse isOpen={collapses.includes(4)}>
									<NavLink to="/teacher" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-list" aria-hidden="true"></i> Listado
									</NavLink>
									<NavLink to="/register-teacher" activeClassName="item-active" className="list-group-item list-group-item-action bg-light">
										<i className="fa fa-plus-circle" aria-hidden="true"></i> Añadir
									</NavLink>
								</Collapse>
								
								{/* Estudiantes */}	
								<a aria-expanded={collapses.includes(5)} className="list-group-item bg-light menu-title"
									data-parent="#accordion"
									href="#"
									id="collapseOne"
									onClick={e => {
										e.preventDefault();
										changeCollapse(5);
									}}
								>
									<i className="fa fa-graduation-cap" aria-hidden="true"></i> Estudiantes
								</a>
								<Collapse isOpen={collapses.includes(5)}>
									<a href="#" className="list-group-item list-group-item-action bg-light">Gestión de estudiantes</a>
									<a href="#" className="list-group-item list-group-item-action bg-light">Referencias</a>
									<a href="#" className="list-group-item list-group-item-action bg-light">Constancias</a>
								</Collapse>
								<a href="/log-emails" className="list-group-item bg-light menu-title"><i className="fa fa-envelope" aria-hidden="true"></i> Correos</a>
								
							</>
						}
						{user.role == 2 && 
							<>
								<a href="/profile" className="list-group-item bg-light">Perfil</a>
								<a href="#" className="list-group-item bg-light">Notas</a>
								<a href="#" className="list-group-item bg-light">Material didáctico</a>
							</>
						}
						{user.role == 3 && 
							<>
								<a href="/profile" className="list-group-item bg-light">Perfil</a>
								<a href="#" className="list-group-item bg-light">Inscripciones</a>
								<a href="#" className="list-group-item bg-light">Notas</a>
								<a href="#" className="list-group-item bg-light">Material didáctico</a>
								<a href="#" className="list-group-item bg-light">Constancias</a>
								<a href="#" className="list-group-item bg-light">Pagos</a>
							</>
						}
					</div>	
				</div>
			</div>
		</>
	);
}

export default SideBar;
