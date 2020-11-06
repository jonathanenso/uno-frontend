/* eslint-disable */
import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { history, Role } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';

import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import LandingPage from './views/LandingPage';
import ConfirmEmail from './views/ConfirmEmail';
import RecoverPassword from './views/recoverPassword';
import ResetPassword from './views/resetPassword';
import RequestResetPwd from './views/RequestResetPwd';
import AboutCollegePage from './views/AboutCollege';
import StudiesPage from './views/Studies';
import CultureExtensionsPage from './views/Culture';
import GerminalMagazinePage from './views/GerminalMagazine';
import ContactPage from './views/Contact';

//Perfil
import ProfilePage from './views/profile/ProfilePage';
//Sedes 
import AgencyListPage from './views/agency/AgencyList';
import AgencyCreatePage from './views/agency/AgencyCreate';
import AgencyUpdatePage from './views/agency/AgencyUpdate';
//Carreras
import CareerListPage from './views/career/CareerList';
import CareerCreatePage from './views/career/CareerCreate';
import CareerUpdatePage from './views/career/CareerUpdate';
//Logs
import LogsEmailListPage from './views/logEmails/LogEmailsList';
//Materias
import MatterListPage from './views/matter/MatterList';
import MatterCreatePage from './views/matter/MatterCreate';
import MatterUpdatePage from './views/matter/MatterUpdate';
//Clases
import ClaseListPage from './views/clases/ClasesList';
import ClaseCreatePage from './views/clases/ClaseCreate';
/* import MatterUpdatePage from './views/matter/MatterUpdate';
 */
//Profesores
//import TeacherListPage from './views/teacher/TeacherList2';
import TeacherListPage from './views/teacher/TeacherList';
import TeacherCreatePage from './views/teacher/TeacherCreate';
import TeacherMatterPage from './views/teacher/TeacherMatter';
import TeacherUpdatePage from './views/teacher/TeacherUpdate';

function App() {
  
	const dispatch = useDispatch();

	useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

	return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/confirm/:token" component={ConfirmEmail}/>
                <Route path="/recover" component={RecoverPassword} />
                <Route path="/restore/:token" component={ResetPassword} />
                <Route path="/requestpwd/:token" component={RequestResetPwd} />
                <Route path="/sobre-la-universidad" component={AboutCollegePage} />
                <Route path="/estudios" component={StudiesPage} />
                <Route path="/cultura-y-extensiones" component={CultureExtensionsPage} />
                <Route path="/revista-germinal" component={GerminalMagazinePage} />
                <Route path="/contacto" component={ContactPage} />

                <PrivateRoute path="/home" component={HomePage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                
                {/* Sedes */}
                <PrivateRoute path="/agency" roles={[Role.Admin]} component={AgencyListPage} />
                <PrivateRoute path="/register-agency" roles={[Role.Admin]} component={AgencyCreatePage} />
                <PrivateRoute path="/update-agency" roles={[Role.Admin]} component={AgencyUpdatePage} />
                {/* Carreras */}
                <PrivateRoute path="/career" roles={[Role.Admin]} component={CareerListPage} />
                <PrivateRoute path="/register-career" roles={[Role.Admin]} component={CareerCreatePage} />
                <PrivateRoute path="/update-career" roles={[Role.Admin]} component={CareerUpdatePage} />
                {/* Materias */}
                <PrivateRoute path="/matter" roles={[Role.Admin]} component={MatterListPage} />
                <PrivateRoute path="/register-matter" roles={[Role.Admin]} component={MatterCreatePage} />
                <PrivateRoute path="/update-matter" roles={[Role.Admin]} component={MatterUpdatePage} />
                {/* Clases */}
                <PrivateRoute path="/clases" roles={[Role.Admin]} component={ClaseListPage} />
                <PrivateRoute path="/register-clase" roles={[Role.Admin]} component={ClaseCreatePage} />
               {/*  <PrivateRoute path="/update-matter" roles={[Role.Admin]} component={MatterUpdatePage} /> */}
                {/* Pofesores*/}
                <PrivateRoute path="/teacher" roles={[Role.Admin]} component={TeacherListPage} />
                <PrivateRoute path="/register-teacher" roles={[Role.Admin]} component={TeacherCreatePage} />
                <PrivateRoute path="/teacher-matter" roles={[Role.Admin]} component={TeacherMatterPage} />
                <PrivateRoute path="/teacher-update" roles={[Role.Admin]} component={TeacherUpdatePage} />
                {/* Logs */}
                <PrivateRoute path="/log-emails" roles={[Role.Admin]} component={LogsEmailListPage} />
                <Redirect from="*" to="/" />
            </Switch>
           
        </Router>     
    );
}

export default App;
