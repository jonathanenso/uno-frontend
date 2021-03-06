/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
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

function ResetPassword() {

    let { token } = useParams();
    const { handleSubmit, register, errors, watch } = useForm();
    let pwd = watch("password");
    
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

    //Registrarse
    const onSubmit = (user, e) => {
        dispatch(userActions.restore(token, user));
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
                    <Row className="justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card-signup card">
                                <div className="card-body">
                                    {alert.message &&
                                        <Alert color={`alert ${alert.type}`} isOpen={visible} toggle={onDismiss} fade={false}>
                                            {alert.message}
                                        </Alert>
                                    }
                                    <h4 className="text-center card-title">Restaurar contraseña</h4>
                                    <Form name="form" onSubmit={handleSubmit(onSubmit)} className="form">
                                        <div className="form-group text-justify">
                                            <label>Contraseña</label>
                                            <input
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
                                            disabled={loading}
                                        >
                                            {loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Actualizar
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

export default ResetPassword;