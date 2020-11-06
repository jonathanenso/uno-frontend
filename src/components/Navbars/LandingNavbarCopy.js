/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	Collapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
	UncontrolledTooltip
} from "reactstrap";

function LandingNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

	return (
		<>
		{collapseOpen ? (
			<div
			id="bodyClick"
			onClick={() => {
				document.documentElement.classList.toggle("nav-open");
				setCollapseOpen(false);
			}}
			/>
		) : null}
		<Navbar className={"fixed-top"} color="red-wine" expand="lg">
			<Container>

			<div className="navbar-translate">
				<NavbarBrand
				href="#"
				id="navbar-brand"
				>
				UNO
				</NavbarBrand>
				<UncontrolledTooltip target="#navbar-brand">
					UNO
				</UncontrolledTooltip>
				<button
				className="navbar-toggler navbar-toggler"
				onClick={() => {
					document.documentElement.classList.toggle("nav-open");
					setCollapseOpen(!collapseOpen);
				}}
				aria-expanded={collapseOpen}
				type="button"
				>
				<span className="navbar-toggler-bar top-bar"></span>
				<span className="navbar-toggler-bar middle-bar"></span>
				<span className="navbar-toggler-bar bottom-bar"></span>
				</button>
			</div>

			<div className="navbar-translate">
				<NavbarBrand
				href="#"
				id="navbar-brand"
				>
				UNO
				</NavbarBrand>
				<UncontrolledTooltip target="#navbar-brand">
					UNO
				</UncontrolledTooltip>
				<button
				className="navbar-toggler navbar-toggler"
				onClick={() => {
					document.documentElement.classList.toggle("nav-open");
					setCollapseOpen(!collapseOpen);
				}}
				aria-expanded={collapseOpen}
				type="button"
				>
				<span className="navbar-toggler-bar top-bar"></span>
				<span className="navbar-toggler-bar middle-bar"></span>
				<span className="navbar-toggler-bar bottom-bar"></span>
				</button>
			</div>
			<Collapse
				className="justify-content-end"
				isOpen={collapseOpen}
				navbar
			>
				<Nav navbar>
				<NavItem>
					<NavLink to="/login" tag={Link}>
						Iniciar Sesión
					</NavLink>
				</NavItem>
				</Nav>
			</Collapse>
			</Container>
			
		</Navbar>
    </>
  );
}

export default LandingNavbar;
