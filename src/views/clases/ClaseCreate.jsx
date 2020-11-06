/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classesActions, teacherActions, matterActions } from '../../actions';
// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import SideBar from "../../components/SideBar/SideBar"
import { Col, Row, Button, Form, FormGroup, Label, Container, Alert  } from 'reactstrap';
import { useForm  } from "react-hook-form";
import { history } from '../../helpers';
import { useHistory } from 'react-router-dom';

function ClaseCreatePage() {

  	useEffect(() => {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
    });
      
	//usuario
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    //Alertas
    const alert = useSelector(state => state.alert);
    //Mostrar alertas
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    
    useEffect(() => {
        if(alert.message){
            setVisible(true); 
            window.setTimeout(()=>{setVisible(false)},5000);   
        }
    },[alert]);

    //Form Data
    const { handleSubmit, register, errors, reset } = useForm();

    //Registrar data
    const onCreateData = (data, e) => {
        dispatch(classesActions.createClase( data ));
    };

    //State de guardado
    const registering = useSelector(state => state.clases.registering);

    //obtener carreras para select
    const getting = useSelector(state => state.teachers.getting);
    const teachers = useSelector(state => state.teachers);
    useEffect(() => {
        dispatch(teacherActions.dataTable());
    },[]);

    const [listTeachers, setlistTeachers] = useState(null);

    useEffect(() => {
        if(useHistory.obtained){
            setlistTeachers(teachers);
        }
    },[teachers.obtained]);


    return (
        <>
            <div className="d-flex" id="wrapper">
				<SideBar/>
				<div id="page-content-wrapper">
					<AdminNavbar/>
                    <div className="container-fluid">
                        <Container>
                        <Row>
                            <Col sm="12" md={{ size: 8, offset: 2 }}>
                                <h3>Añadir Clase</h3>
                                {alert.message &&
                                    <Alert color={`alert ${alert.type}`} isOpen={visible} fade={true}>
                                        <div className="container">
                                            {alert.message}
                                            <button
                                                type="button"
                                                className="close"
                                                aria-label="Close"
                                                onClick={onDismiss}
                                            >
                                                <span aria-hidden="true">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                </span>
                                            </button>
                                        </div>
                                    </Alert>
                                }
                                <Form onSubmit={handleSubmit(onCreateData)} className="form">
                                    <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="career">Usuario</Label>{' '}
                                            {getting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            <select className={'form-control' + (errors.teachers ? ' is-invalid' : '')} name="teachers"
                                                ref={register({ 
                                                        required: "La carrera es requerida" 
                                                    })}>
                                                    <option key="" name="" value=""></option>
                                                    {listTeachers && listTeachers.map(teachers => 
                                                        <option
                                                            key={teachers.id}
                                                            name={teachers.id}
                                                            value={teachers.id}>
                                                            {teachers.firstName}
                                                        </option>
                                                    )}
                                            </select>
                                            {errors.users && <div className="invalid-feedback d-block">{errors.users.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="quarter">Cuatrimestre</Label>
                                            <input
                                                type="number"
                                                maxLength="1"
                                                autoComplete="off"
                                                className={'form-control' + (errors.quarter ? ' is-invalid' : '')}
                                                name="quarter"
                                                ref={register({
                                                    required: "El cuatrimestre es requerido",
                                                })}
                                                min="1" max="9"
                                            />
                                            {errors.quarter && <div className="invalid-feedback">{errors.quarter.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between">
                                        <Button color="primary" disabled={registering}>
                                            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Guardar
                                        </Button>
                                        <Button onClick={e =>{e.preventDefault(); history.goBack();} }>Cancelar</Button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        </Container>
                    </div>

				</div>
            </div>
        </>
    );
}

export default ClaseCreatePage;