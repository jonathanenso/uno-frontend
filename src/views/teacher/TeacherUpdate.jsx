/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherActions } from '../../actions';
// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import SideBar from "../../components/SideBar/SideBar"
import { Col, Row, Button, Form, FormGroup, Label, Container, Alert, Spinner  } from 'reactstrap';
import { useForm  } from "react-hook-form";
import Datetime from 'react-datetime';
import { history } from '../../helpers';
import { useLocation } from "react-router-dom";
import moment from 'moment';


function TeacherUpdatePage() {

    const location = useLocation();

    

  	useEffect(() => {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
    });

    //Fechas válidas 
    var validDates = Datetime.moment().subtract(80, 'year');
    var valid = function( current ){
        return current.isAfter( validDates );
    };

    const dispatch = useDispatch();

    //Obtener estados del docente
    const teacherState = useSelector(state => state.teachers.teacher);
    const searching = useSelector(state => state.teachers.searching);
    const teachers = useSelector(state => state.teachers);
    //obtener docente del state
    const [teacher, setTeacher] = useState(null);

    //obtener fechas
    const [date, setDate] = useState(null)



    /**
     * Obtener parametros del docente (id)
     */
    useEffect(() => {

        if(location.state === undefined){
            history.goBack();
        }else{
            //Consultar docente por id de user
            dispatch(teacherActions.getTeacher( location.state.id ));
        }
    }, [location]);

    //Asignar docente obtenido del state a la variable
    useEffect(() => {
        if(teachers.searched){
            setTeacher(teacherState);
            var newDate = moment(teacherState.createdDate).local().format("YYYY-MM-DD");
            setDate(newDate);
            //console.log('teacherState', teacherState)

        }
    },[teachers.searched]);

    
    //usuario
    const user = useSelector(state => state.authentication.user);

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
    const { handleSubmit, register, errors } = useForm();

    //Registrar data
    const onUpdateData = (data, e) => {
        dispatch(teacherActions.updateTeacher( location.state.id, data ));
    };

    //State de actualizacion
    const updating = useSelector(state => state.teachers.updating);

    //Actualizar estado del docente al cambio de información
    useEffect(() => {
        if(teachers.success){
            setTeacher(teachers.teacherUpdated);
        }
    },[teachers.success]);




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
                                <h3>Actualizar Docente</h3>
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
                                {searching &&  <div className="d-flex justify-content-center">
                                    <Spinner color="primary" />
                                </div>}
                                {teacher &&
                                <Form onSubmit={handleSubmit(onUpdateData)}className="form">
                                    <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="firstName">Nombre</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.firstName ? ' is-invalid' : '')}
                                                name="firstName"
                                                ref={register({
                                                    required: "El nombre es requerido",
                                                })}
                                                defaultValue={teacher.firstName}
                                            />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="firstName">Apellido</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.lastName ? ' is-invalid' : '')}
                                                name="lastName"
                                                ref={register({
                                                    required: "El apellido es requerido",
                                                })}
                                                defaultValue={teacher.lastName}
                                            />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.email ? ' is-invalid' : '')}
                                                name="email"
                                                ref={register({
                                                    required: "El email es requerido",
                                                })}
                                                defaultValue={teacher.email}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="address">Dirección</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.address ? ' is-invalid' : '')}
                                                name="address"
                                                ref={register({
                                                    required: "La dirección es requerida",
                                                })}
                                                defaultValue={teacher.address}
                                            />
                                            {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="city">Ciudad</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.city ? ' is-invalid' : '')}
                                                name="city"
                                                ref={register({
                                                    required: "La ciudad es requerida",
                                                })}
                                                defaultValue={teacher.email}
                                            />
                                            {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="state">Estado/Municipio</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.state ? ' is-invalid' : '')}
                                                name="state"
                                                ref={register({
                                                    required: "La ciudad es requerida",
                                                })}
                                                defaultValue={teacher.state}
                                            />
                                            {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="zip">Código Postal</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.zip ? ' is-invalid' : '')}
                                                name="zip"
                                                ref={register({
                                                    required: "El código zip es requerido",
                                                })}
                                                defaultValue={teacher.zip}
                                            />
                                            {errors.zip && <div className="invalid-feedback">{errors.zip.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="document">Documento de Identificación</Label>
                                            <input
                                                maxLength="20"
                                                autoComplete="off"
                                                className={'form-control' + (errors.document ? ' is-invalid' : '')}
                                                name="document"
                                                ref={register({
                                                    required: "La identificación es requerida",
                                                })}
                                                defaultValue={teacher.document}
                                            />
                                            {errors.document && <div className="invalid-feedback">{errors.state.document}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                     <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="birthday">Fecha de Nacimiento</Label>
                                            <Datetime locale="Es-es" timeFormat={false}
                                                isValidDate={ valid }
                                                dateFormat={'YYYY-MM-DD'}
                                                inputProps={{ 
                                                    name: 'birthday', 
                                                    ref:(register({
                                                        required: "La fecha de nacimiento es requerida",
                                                    })),
                                                    autoComplete:"off",
                                                    className: ('form-control' + (errors.birthday ? ' is-invalid' : '')),
                                                }}
                                                defaultValue = {date}
                                            />
                                            {errors.birthday && <div className="invalid-feedback d-block">{errors.birthday.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="createdDate">Fecha de Ingreso</Label>
                                            <Datetime locale="Es-es" timeFormat={false}
                                                isValidDate={ valid }
                                                dateFormat={'YYYY-MM-DD'}
                                                inputProps={{ 
                                                    name: 'createdDate', 
                                                    ref:(register({
                                                        required: "La fecha de ingreso es requerida",
                                                    })),
                                                    autoComplete:"off",
                                                    className: ('form-control' + (errors.createdDate ? ' is-invalid' : '')),
                                                }}
                                                defaultValue = {date}
                                            />
                                            {errors.createdDate && <div className="invalid-feedback d-block">{errors.createdDate.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-between">
                                        <Button color="primary" disabled={updating}>
                                            {updating && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                            Actualizar
                                        </Button>
                                        <Button onClick={e =>{e.preventDefault(); history.goBack();} }>Cancelar</Button>
                                    </div>
                                </Form>
                                }
                                
                            </Col>
                        </Row>
                        </Container>
                    </div>

				</div>
            </div>
        </>
    );
}

export default TeacherUpdatePage;