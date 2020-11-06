/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
	Alert
} from "reactstrap";
  
import { userActions } from '../actions';

// core components
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import TransparentFooter from "../components/Footers/TransparentFooter";
import login2 from '../assets/img/login-2.jpg';
import logo from '../assets/img/now-logo.jpg';

function LoginPage() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { email, password } = inputs;
	const loggingIn = useSelector(state => state.authentication.loggingIn);
	const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    
    // reset login status
    useEffect(() => { 
        dispatch(userActions.logout()); 
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    },[]);

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
	}
    
    //Alert
	const [visible, setVisible] = useState(true);

	const onDismiss = () => setVisible(false);

	useEffect(() => {
        if(alert.message){
			setVisible(true);
		}
    },[alert]);

    return (
        <>
        <ExamplesNavbar />
        <div className="page-header clear-filter">
        <div
          	className="page-header-image"
          	style={{
                backgroundImage: `url(${login2})`
          	}}
        ></div>
        <div className="content">
            <Container>
            	<Col className="ml-auto mr-auto" md="4">
              	<Card className="card-login card-plain">
                	<Form name="form" onSubmit={handleSubmit} className="form">
					<CardHeader className="text-center">
						<div className="logo-container">
						<img
							alt="..."
							src={logo}
						></img>
						</div>
					</CardHeader>
                  	<CardBody>
					   	{alert.message &&
							<Alert color={`alert ${alert.type}`} isOpen={visible} toggle={onDismiss} fade={false}>
								{alert.message}
							</Alert>
        				}
                        <InputGroup className={ "no-border input-lg" + (firstFocus ? " input-group-focus" : "")}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Correo electrónico"
                                type="text" name="email" value={email} autoComplete="off"
                                onChange={handleChange}
                                onFocus={() => setFirstFocus(true)}
                                onBlur={() => setFirstFocus(false)}
                            ></Input>
                        </InputGroup>
                        {submitted && !email &&
                             <div className="text-primary mb-2">Correo electrónico requerido</div>
                        } 
                        <InputGroup className={"no-border input-lg" + (lastFocus ? " input-group-focus" : "")}>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                <i className="now-ui-icons objects_key-25"></i>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="password" name="password" value={password}
                                placeholder="Contraseña"
                                onChange={handleChange}
                                onFocus={() => setLastFocus(true)}
                                onBlur={() => setLastFocus(false)}
                            ></Input>
                        </InputGroup>
                        {submitted && !password &&
                             <div className="text-primary">Contraseña requerida</div>
                        } 
                  	</CardBody>
					<CardFooter className="text-center">
						<Button
							block
							className="btn-round"
							color="info"
							size="lg"
						>
						{loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
							Iniciar Sesión
						</Button>
						<div className="pull-left">
							<h6>
								<Link to="/register" className="link">Registrarse</Link>
							</h6>
						</div>
						<div className="pull-right">
						<h6>
                            <Link to="/recover" className="link">Recuperar contraseña</Link>
						</h6>
						</div>
					</CardFooter>
                </Form>
              	</Card>
            </Col>
          	</Container>
        </div>
        <TransparentFooter />
        </div>
        </>
    );
}

export default LoginPage;