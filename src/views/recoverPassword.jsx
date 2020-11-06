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

function RecoverPassword() {

    const { handleSubmit, register, errors } = useForm();
    
    const loading = useSelector(state => state.users.loading);
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

    //Enviar email de recuperacion de contraseña
    const onSubmit = (email, e) => {
        dispatch(userActions.forgot(email));
    };

    useEffect(() => {
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
                    <Row className="justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card-signup card">
                                <div className="card-body">
                                    {alert.message &&
                                        <Alert color={`alert ${alert.type}`} isOpen={visible} toggle={onDismiss} fade={false}>
                                            {alert.message}
                                        </Alert>
                                    }
                                    <h4 className="text-center card-title">Recuperar contraseña</h4>
                                    <Form name="form" onSubmit={handleSubmit(onSubmit)} className="form">

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


                                        <div className="send-button">
                                        <Button
                                            className="btn-round"
                                            color="info"
                                            size="lg"
                                            disabled={loading}
                                        >
                                            {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Recuperar contraseña
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

export default RecoverPassword;