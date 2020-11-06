/* eslint-disable */
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { teacherActions, classesActions, matterActions } from '../../actions';
import moment from 'moment';
// core components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import SideBar from "../../components/SideBar/SideBar"
import DataTable from 'react-data-table-component';
import { InputGroup, InputGroupAddon, Button, Input, Spinner, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, UncontrolledTooltip } from 'reactstrap';
//componente dataTable sede
import { history } from '../../helpers';
import useDebounce from '../../components/Debounce'; 
import '../../assets/css/table.css';

//Componente filtro
const FilterComponent = ({ filterText, onFilter, onClear }) => {
	return <InputGroup style={{ "width": "200px"}}>
		<Input autoComplete="off" style={{"height": "38px", "marginTop":"10px"}} id="search" type="text" placeholder="buscar" value={filterText} onChange={onFilter} />
		<InputGroupAddon addonType="append">
			<Button onClick={onClear} color="primary"><i className="fa fa-times" aria-hidden="true"></i></Button>
		</InputGroupAddon>
	</InputGroup>	
}

function TeacherListPage() {

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

	const dataTeachers = useSelector(state => state.teachers.data);
    const loadingPage = useSelector(state => state.teachers.loading);

	//Verificar data de redux
	useEffect(() => {
		if(dataTeachers){
			setData(dataTeachers.results);
			setRowCount(dataTeachers.numOfResults);
		}else{

		}
		},[dataTeachers]);



	// Inicializar tabla sin data
	const [data, setData] = useState([])
	const [rowCount, setRowCount] = useState(0)


	//Columnas Data table
	const columns = [
		{
			name: 'Nombres',
			selector: 'firstName',
			sortable: true,
		},
		{
			name: 'Apellidos',
			selector: 'lastName',
			sortable: true,
		},
		{
			name: 'Email',
			selector: 'email',
			sortable: true,
		},
		{
			name: 'Clases',
			selector: 'matters',
			sortable: true,
			cell : (row)=>{

				if(row.matters.length>0){
					return row.matters.map(e => e.name).join(", ");
				}
				
				
			},
		},
		{
			name: 'Fecha de registro',
			selector: 'createdDate',
			sortable: true,
			cell : (row)=>{
				return moment(row.createdDate).local().format("YYYY-MM-DD")
			},
		},
		{
			name: '',
            button: true,
            width: '110px',
			cell: row => 
            <div className="d-flex">
            {/*     <Button className="btn-link" color="primary" size="sm" onClick={e => 
                    {
                        e.preventDefault(); 
                        history.push('/update-career',{id:row.id})
                    }
			    }><i className="fas fa-search"></i></Button> */}
                <Button className="btn-link" color="primary" size="sm" onClick={e => 
                    {
                        e.preventDefault(); 
                        history.push('/teacher-matter',{id:row._id})
                    }
			    }><i className="fas fa-book"></i></Button>
                <Button className="btn-link" color="primary" size="sm" onClick={e => 
                    {
                        e.preventDefault(); 
                        history.push('/teacher-update',{id:row._id})
                    }
			    }><i className="fas fa-pencil-alt"></i></Button>
            </div>,
		},
	];


	const [perPage, setPerPage] = useState(10);
	const [perPageSelect, setPerPageSelect] = useState(0);
	const [direction, setDirection] = useState({});

	//data inicial
	const getDataTable = (page) => {
		dispatch(teacherActions.dataTable(page, perPageSelect == 0 ? perPage : perPageSelect, direction, {}));
	}
	
	//Paginar
	const handlePageChange = async (page) => {
		dispatch(teacherActions.dataTable(page, perPageSelect == 0 ? perPage : perPageSelect, direction, filterText ? filterText: {}));
	};
	
	//Ordenar
	const handleSort = (column, sortDirection) => {
		let sort = {"id": column.selector, "desc": (sortDirection == "asc" ? false : true) }
		setDirection(sort);
		dispatch(teacherActions.dataTable(1, perPageSelect == 0 ? perPage : perPageSelect, sort, filterText ? filterText: {}));
	};

	//Cambiar cantidad de filas
	const handlePerRowsChange = async (newPerPage, page) => {
		setPerPageSelect(newPerPage);
		dispatch(teacherActions.dataTable(page, newPerPage, direction, filterText ? filterText: {}));
	};

	const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	
	//Retraso 500ms input search
	const debouncedSearchTerm = useDebounce(filterText, 500);

	//Header search del DataTable
	const subHeaderComponentMemo = useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
				getDataTable(1);
			}
		};
		return <FilterComponent onFilter={e =>  setFilterText(e.target.value) } onClear={handleClear} filterText={filterText} />;
	}, [filterText, resetPaginationToggle]);


	//Filtrar con delay 
	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(teacherActions.dataTable(1, perPageSelect == 0 ? perPage : perPageSelect, direction, filterText))
		}
	},[debouncedSearchTerm]);

	//Consultar al entrar
	useEffect(() => {
		getDataTable(1);
	}, []);

	//Opciones de paginacion
	const paginationOptions = { rowsPerPageText: 'Filas por página', rangeSeparatorText: 'de', selectAllRowsItem: true, selectAllRowsItemText: 'Todos' };

	//Loader de la tabla
	const CustomLoader = () => (
		<>
			<Spinner type="grow" color="primary" style={{ width: '3rem', height: '3rem' }} />
		</>
	);

	//Data al expandir una fila
	const ExpandedComponent = ({ data }) => (
		<ListGroup>
			<ListGroupItem>
				<ListGroupItemHeading>{ `${data.firstName} ${data.lastName}`}</ListGroupItemHeading>
				<ListGroupItemText>
					{ data.email}
				</ListGroupItemText>
			</ListGroupItem>
	  	</ListGroup>
	);

    return (
        <>
            <div className="d-flex" id="wrapper">
				<SideBar/>
				<div id="page-content-wrapper">
					<AdminNavbar/>
					<div className="flex-column flex-md-row p-3">

						<div className="d-flex justify-content-between" style={{padding:"4px 16px 4px 24px"}}>
							<div className="align-self-center">
								<h3 style={{ marginBottom: '0' }}>Docentes</h3>
							</div>
							<Button id="add" onClick={()=> history.push('/register-teacher') } className="btn-round btn-icon" color="primary">
								<i className="fa fa-plus" />
							</Button>
							<UncontrolledTooltip placement="bottom" target="add" delay={0}>
								Añadir docente
							</UncontrolledTooltip>
						</div>
						<Row>
							<Col>
							<DataTable
								className="dataTables_wrapper"
								expandableRows
								expandableRowsComponent={<ExpandedComponent />}
								responsive
								highlightOnHover
								//striped
								sortIcon={ <i className="fa fa-arrow-down ml-2" aria-hidden="true"></i> }
								title="Profesores"
								columns={columns}
								data={data}
								progressPending={loadingPage}
								pagination
								paginationServer
								paginationTotalRows={rowCount}
								onSort={handleSort}
								sortServer
								onChangeRowsPerPage={handlePerRowsChange}
								onChangePage={handlePageChange}
								paginationComponentOptions={paginationOptions}
								subHeader
								subHeaderComponent={subHeaderComponentMemo}
								persistTableHead
								progressComponent={<CustomLoader />}
								noDataComponent="No hay registros para mostrar"
								noHeader={true}
							/>
							</Col>
						</Row>
					</div>
				</div>
            </div>
        </>
    );
}

export default TeacherListPage;