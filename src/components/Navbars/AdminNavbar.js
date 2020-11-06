/* eslint-disable */
import React from "react";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
} from "reactstrap";

function AdminNavbar() {
  const [navbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
		{collapseOpen ? (
			<div id="bodyClick" onClick={() => {
				document.documentElement.classList.toggle("nav-open");
				setCollapseOpen(false);
			}}
			/>
		) : null}
      	<Navbar className={"flex-column flex-md-row bd-navbar" + navbarColor} expand="lg" color="info">
          	<div className="navbar-translate">
				<NavbarBrand
					href="#"
					id="navbar-brand"
					onClick={(event) => {
						event.preventDefault();
						const oldClassName = document.getElementById('wrapper').className;
						const newClassName = oldClassName === 'd-flex toggled' ? 'd-flex' : 'd-flex toggled';
						document.getElementById('wrapper').className  = newClassName;
						setCollapseOpen(false);
				}}
				> Menú 
				</NavbarBrand>
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
					<UncontrolledDropdown nav>
						<DropdownToggle
							aria-haspopup={true}
							caret
							color="default"
							data-toggle="dropdown"
							href="#"
							id="navbarDropdownMenuLink"
							nav
							onClick={e => e.preventDefault()}
						>
							<i className="fas fa-user fa-lg mr-2"></i>
						</DropdownToggle>
						<DropdownMenu aria-labelledby="navbarDropdownMenuLink" className="dropdown-menu-right">
							<DropdownItem href="/profile">Mi perfil</DropdownItem>
							<DropdownItem href="/login">Salir</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
          </Collapse>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
