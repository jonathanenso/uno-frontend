/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherActions } from '../../actions';
// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import SideBar from "../../components/SideBar/SideBar"
import { Col, Row, Button, Form, FormGroup, Label, Container, Alert  } from 'reactstrap';
import { useForm  } from "react-hook-form";
import { history } from '../../helpers';
import Datetime from 'react-datetime';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
function TeacherCreatePage() {
    const ref = useRef();
  	useEffect(() => {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		return function cleanup() {
			document.body.classList.remove("landing-page");
			document.body.classList.remove("sidebar-collapse");
		};
    });

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
        console.log('selectionMatter',selectionMatter)
        if (selectionMatter.length === 0) {
            setValidateSelect(true);
            return;
        }
        dispatch(teacherActions.createTeacher( data ));
    };
    
    //Fechas válidas 
    var validDates = Datetime.moment().subtract(80, 'year');
    var valid = function( current ){
        return current.isAfter( validDates );
    };

    //State de guardado
    const registering = useSelector(state => state.careers.registering);

    var options = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Miles'},
        {id: 3, name: 'Charles'},
        {id: 4, name: 'Herbie'},
    ];

    
    const [selectionMatter, setSelectionMatter] = useState([]);
    const [validateSelect, setValidateSelect] = useState(false);
    const handleChange = (selectedOptions) => {
        setSelectionMatter(selectedOptions);
        if(selectedOptions.length>0){
            setValidateSelect(false);
        }
    }

    console.log(errors)
      
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
                                <h3>Añadir docente</h3>
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
                                            <Label for="email">Correo electrónico</Label>
                                            <input
                                                maxLength="150"
                                                autoComplete="off"
                                                className={'form-control' + (errors.email ? ' is-invalid' : '')}
                                                name="email"
                                                ref={register({
                                                    required: "El correo es requerido",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                        message: "Correo electrónico inválido"
                                                    }
                                                })}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="document">Documento de identidad</Label>
                                            <input
                                                maxLength="80"
                                                autoComplete="off"
                                                className={'form-control' + (errors.document ? ' is-invalid' : '')}
                                                name="document"
                                                ref={register({
                                                    required: "El documento es requerido",
                                                })}
                                            />
                                            {errors.document && <div className="invalid-feedback">{errors.document.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="firstName">Nombres</Label>
                                            <input
                                                maxLength="150"
                                                autoComplete="off"
                                                className={'form-control' + (errors.firstName ? ' is-invalid' : '')}
                                                name="firstName"
                                                ref={register({
                                                    required: "El nombre es requerido",
                                                })}
                                            />
                                            {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                        <FormGroup>
                                            <Label for="lastName">Apellidos</Label>
                                            <input
                                                maxLength="150"
                                                autoComplete="off"
                                                className={'form-control' + (errors.lastName ? ' is-invalid' : '')}
                                                name="lastName"
                                                ref={register({
                                                    required: "El apellido es requerido",
                                                })}
                                            />
                                            {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="address">Dirección</Label>
                                        <input
                                            maxLength="200"
                                            autoComplete="off"
                                            className={'form-control' + (errors.address ? ' is-invalid' : '')}
                                            name="address"
                                            ref={register({
                                                required: "La dirección es requerida",
                                            })}
                                        />
                                        {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                                    </FormGroup>
                                    <Row form>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="city">Ciudad</Label>
                                            <input
                                                maxLength="100"
                                                autoComplete="off"
                                                className={'form-control' + (errors.city ? ' is-invalid' : '')}
                                                name="city"
                                                ref={register({
                                                    required: "El ciudad es requerida",
                                                })}
                                            />
                                            {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="state">Estado/Municipio</Label>
                                            <input
                                                maxLength="100"
                                                autoComplete="off"
                                                className={'form-control' + (errors.state ? ' is-invalid' : '')}
                                                name="state"
                                                ref={register({
                                                    required: "El estado/municipio es requerido",
                                                })}
                                            />
                                            {errors.state && <div className="invalid-feedback">{errors.state.message}</div>}
                                        </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                        <FormGroup>
                                            <Label for="zip">Código Postal</Label>
                                            <input
                                                type="Number"
                                                maxLength="8"
                                                autoComplete="off"
                                                className={'form-control' + (errors.zip ? ' is-invalid' : '')}
                                                name="zip"
                                                ref={register({
                                                    required: "El código postal es requerido",
                                                })}
                                            />
                                            {errors.zip && <div className="invalid-feedback">{errors.zip.message}</div>}
                                        </FormGroup>  
                                        </Col>
                                        <Col md={4}>
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
                                            />
                                            {errors.birthday && <div className="invalid-feedback d-block">{errors.birthday.message}</div>}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    
                                    {/* <FormGroup>
                                        <Label for="address">Materias</Label>
                                        <Typeahead
                                            id="matter-select"
                                            labelKey="name"
                                            multiple
                                            name="matters"
                                            options={options}
                                            placeholder="Seleccione materias"  
                                            emptyLabel="No hay resultados"
                                            isInvalid={errors.matters ? true:false}
                                            // inputProps={{ 
                                            //     name: 'matters', 
                                            //     ref:(register({
                                            //         required: "La fecha de nacimiento es requerida",
                                            //     })),
                                            //     autoComplete:"off",
                                            // }}
                                        />
                                        {validateSelect && <div className="invalid-feedback d-block">Seleccione materia(s)</div>}
                                    </FormGroup> */}
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

export default TeacherCreatePage;