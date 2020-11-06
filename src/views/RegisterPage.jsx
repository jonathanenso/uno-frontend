/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import { useForm } from "react-hook-form";
// reactstrap components
import {
    Button,
    Form,
    Container,
    Row,
    Alert
} from "reactstrap";
// core components
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import TransparentFooter from "../components/Footers/TransparentFooter";

function RegisterPage() {

    const { handleSubmit, register, errors, watch } = useForm();
    let pwd = watch("password");
    
    const registering = useSelector(state => state.registration.registering);
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    //Mostrar alerta
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    
    useEffect(() => {
        if(alert.message){
			setVisible(true);
		}
    },[alert]);

    //Registrarse
    const onSubmit = (user, e) => {
        //console.log("Submit event", e);
        dispatch(userActions.register(user));
    };

    React.useEffect(() => {
        document.body.classList.add("signup-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    return (
        <>
		<ExamplesNavbar />
        <div className="page-header header-filter" filter-color="black">
            <div
                className="page-header-image"
                style={{
                    backgroundImage: "url(../src/assets/img/bg18.jpg)"
                }}
            ></div>
            <div className="content">
                <Container>
                    <Row>
                        <div className="ml-auto mr-auto col-md-6 col-lg-4">
                            <div className="info info-horizontal">
                                <div className="icon icon-info">
                                    <i className="now-ui-icons media-2_sound-wave"></i>
                                </div>
                                <div className="description"><h5 className="info-title">Marketing</h5>
                                <p className="description">We've created the marketing campaign of the website. It was a very interesting collaboration.</p>
                                </div>
                            </div>
                            <div className="info info-horizontal">
                                <div className="icon icon-info">
                                    <i className="now-ui-icons media-1_button-pause"></i>
                                </div>
                                <div className="description">
                                    <h5 className="info-title">Fully Coded in React 16</h5>
                                    <p className="description">We've developed the website with React 16 and CSS3. The client has access to the code using GitHub.</p>
                                </div>
                            </div>
                            <div className="info info-horizontal">
                                <div className="icon icon-info">
                                    <i className="now-ui-icons users_single-02"></i>
                                </div>
                                <div className="description">
                                    <h5 className="info-title">Built Audience</h5>
                                    <p className="description">There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mr-auto col-md-6 col-lg-4">
                            <div className="card-signup card">
                                <div className="card-body">
                                    {alert.message &&
                                        <Alert color={`alert ${alert.type}`} isOpen={visible} toggle={onDismiss} fade={false}>
                                            {alert.message}
                                        </Alert>
                                    }
                                    <h4 className="text-center card-title">Registro</h4>
                                    <Form name="form" onSubmit={handleSubmit(onSubmit)} className="form">
                                        <div className="form-group text-justify">
                                            <label>Nombres</label>
                                            <input
                                                maxLength="40"
                                                autoComplete="off"
                                                className={'form-control' + (errors.firstName ? ' is-invalid' : '')}
                                                name="firstName"
                                                ref={register({
                                                    required: "El nombre es requerido",
                                                })}
                                            />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                                        </div>
                                        <div className="form-group text-justify">
                                            <label className="">Apellidos</label>
                                            <input
                                                maxLength="40"
                                                autoComplete="off"
                                                className={'form-control' + (errors.lastName ? ' is-invalid' : '')}
                                                name="lastName"
                                                ref={register({
                                                    required: "El apellido es requerido",
                                                })}
                                            />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                                        </div>
                                        <div className="form-group text-justify">
                                            <label>Correo electrónico</label>
                                            <input
                                                autoComplete="off"
                                                className={'form-control' + (errors.email ? ' is-invalid' : '')}
                                                name="email"
                                                ref={register({
                                                    required: "Correo electrónico requerido",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                        message: "Correo electrónico inválido"
                                                    }
                                                })}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </div>
                                        <div className="form-group text-justify">
                                            <label>Contraseña</label>
                                            <input
                                                maxLength="20"
                                                className={'form-control' + (errors.password ? ' is-invalid' : '')}
                                                name="password"
                                                type="password"
                                                ref={register({
                                                    required: "La contraseña es requerida",
                                                    minLength:{ value:6, message: "La contraseña debe contener mínimo 6 caracteres"}
                                                })}
                                            />
                                            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                                        </div>
                                        <div className="form-group text-justify">
                                            <label>Confirmar contraseña</label>
                                            <input
                                                maxLength="20"
                                                className={'form-control' + (errors.confirm_password ? ' is-invalid' : '')}
                                                name="confirm_password"
                                                type="password"
                                                ref={register({
                                                    required: "La confirmación de contraseña es requerida",
                                                    validate: value => value === pwd || "Las contraseñas no coinciden"
                                                })}
                                            />
                                            {errors.confirm_password && <div className="invalid-feedback">{errors.confirm_password.message}</div>}
                                        </div>
                                        <div className="send-button">
                                        <Button
                                            className="btn-round"
                                            color="info"
                                            size="lg"
                                            disabled={registering}
                                        >
                                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Registarse
                                        </Button>
                                        </div>
                                        <Link to="/login" className="btn btn-link">Cancelar</Link>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            <TransparentFooter />
        </div>
		</>
    );
}

export default RegisterPage;