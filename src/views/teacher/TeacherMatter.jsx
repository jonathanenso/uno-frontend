/* eslint-disable */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherActions, matterActions, classesActions } from '../../actions';
// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import SideBar from "../../components/SideBar/SideBar"
import { Col, Row, Button, Form, FormGroup, Label, Container, Alert, Spinner   } from 'reactstrap';
import { useForm, Controller  } from "react-hook-form";
import { history } from '../../helpers';
import Datetime from 'react-datetime';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useLocation } from "react-router-dom";

function TeacherMatterPage() {

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

    const dispatch = useDispatch();

    /**
     * Obtener parametros del docente (id)
     */
    useEffect(() => {

        if(location.state === undefined){
            history.goBack();
        }else{
            //Consultar materias del docente por id de user
            dispatch(classesActions.getUserMatter( location.state.id ));
        }
    }, [location]);

    //Revisar las materias del docente
    const matterUser = useSelector(state => state.clases.userMatter);
    const loadingMatterUser = useSelector(state => state.matters.searching);

    const [matterList, setMatterList] = useState([]);
    //Verificar data de la consulta de materias y asignar
    useEffect(() => {
        if(matterUser && matterUser.results){
            setMatterList(matterUser.results.matters);
        }else{
            setMatterList([])
        }
    },[matterUser]);


    //Consultar materias
    useEffect(() => {
        dispatch(matterActions.getMatterAll());
    },[]);


    //Obtener todas las materias
    const dataMatters = useSelector(state => state.matters.matter);
    const loadingMatters = useSelector(state => state.matters.searching);

    const [matter, setMatter] = useState([]);
	//Verificar data de la consulta de materias y asignar
	useEffect(() => {
		if(dataMatters){
            setMatter(dataMatters);
		}
  	},[dataMatters]);

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
    const { handleSubmit, register, errors, reset, control } = useForm();

    //Registrar data
    const onCreateData = (data, e) => {
        data.user = location.state.id;
        dispatch(classesActions.createClase( data ));
    };


    //Obtener estados del docentee
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
            //console.log('teacherState', teacherState)

        }
    },[teachers.searched]);

    
    //usuario
    const user = useSelector(state => state.authentication.user);

    const TypeAhead = useRef(null);

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
                                <h3>Materias del docente</h3>
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
                            </Col>
                        </Row>
                        {teacher &&
                        <Form onSubmit={handleSubmit(onCreateData)} className="form">
                            <FormGroup>
                                <br></br>
                                <Label for="matters">Docente:</Label>
                                <br></br>
                                <Label for="firstName">{teacher.firstName}</Label> <Label for="firstName">{teacher.lastName}</Label>
                                <br></br>
                                <br></br>
                                <Label for="matters">Materias</Label>
                                {loadingMatters && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                {!loadingMatterUser && <>
                                    <Controller
                                        name="matters"
                                        control={control}
                                        rules={{
                                            required: "Seleccione al menos una materia",
                                            validate: matters => {
                                                return Array.isArray(matters) && matters.length > 0;
                                            }
                                        }}
                                        defaultValue={matterList}
                                        as={
                                            <Typeahead
                                                ref={TypeAhead}
                                                isInvalid={errors.matters ? true:false}
                                                id="matter-select"
                                                labelKey="name"
                                                multiple
                                                defaultSelected={matterList}
                                                name="matters"
                                                options={ matter }
                                                placeholder="Seleccione materias"  
                                                emptyLabel="No hay resultados"
                                            />
                                        }
                                    />
                                    {errors.matters && <div className="invalid-feedback d-block">Seleccione al menos una materia</div>}
                                </>
                                }
                            </FormGroup> 
                            <div className="d-flex justify-content-between">
                                <Button color="primary">
                                    Guardar
                                </Button>
                                <Button onClick={e =>{e.preventDefault(); history.goBack();} }>Cancelar</Button>
                            </div>
                        </Form>
                        }
                        </Container>
                    </div>

				</div>
            </div>
        </>
    );
}

export default TeacherMatterPage;