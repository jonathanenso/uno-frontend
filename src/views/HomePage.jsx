/* eslint-disable */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

// core components
import AdminNavbar from "../components/Navbars/AdminNavbar";
//import DefaultFooter from "../components/Footers/DefaultFooter";
import SideBar from "../components/SideBar/SideBar"

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    React.useEffect(() => {
        document.body.classList.add("landing-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("landing-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    return (
        <>
            <div className="d-flex" id="wrapper">

            <SideBar/>

            <div id="page-content-wrapper">

                <AdminNavbar/>
                <div className="container-fluid">
                <h1>Hola {user.firstName}!</h1>
                    <h3>Usuarios:</h3>
                    {users.loading && <em>Cargando usuarios...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) =>
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                    {
                                        user.deleting ? <em> - Eliminando...</em>
                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : <span> - <a onClick={() => handleDeleteUser(user.id)} className="text-primary">Eliminar</a></span>
                                    }
                                </li>
                            )}
                        </ul>
                    }
                    <p>
                        <Link to="/login">Salir</Link>
                    </p>
                </div>
            </div>


            </div>

        </>
    );
}

export default HomePage;