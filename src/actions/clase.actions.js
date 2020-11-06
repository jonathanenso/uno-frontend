/* eslint-disable */
import { claseConstants } from '../constants/clases.constants';
import { claseService } from '../services/clases.service';
import { alertActions } from './';

export const classesActions = {


    /**
     * Consulta para DataTable de materias
     * @param {Number} pageIndex: número de página
     * @param {Number} pageSize: cantidad de filas por página
     * @param {Object} sortBy: orden de columnas
     * @param {String} globalFilter: filtro global
     */
    dataTable() {
        return dispatch => {
            dispatch(request());

            claseService.claseTable()
                .then(
                    clases => {
                        dispatch(success(clases))
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request() { return { type: claseConstants.CLASES_TABLE_REQUEST } }
        function success(clases) { return { type: claseConstants.CLASES_TABLE_SUCCESS, clases } }
        function failure(error) { return { type: claseConstants.CLASES_TABLE_FAILURE, error } }
    },

    //Registrar materias
    createClase(clase) {
        return dispatch => {
            dispatch(request(clase));

            claseService.createClase(clase)
                .then(
                    () => { 
                        dispatch(success());
                        dispatch(alertActions.success('¡Se ha registrado las materias correctamente!'));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(clase) { return { type: claseConstants.CLASES_CREATE_REQUEST, clase } }
        function success(clase) { return { type: claseConstants.CLASES_CREATE_SUCCESS, clase } }
        function failure(error) { return { type: claseConstants.CLASES_CREATE_FAILURE, error } }
    },


    //Obtener todas las materias del usuario
    getUserMatter(id) {
        return dispatch => {
            dispatch(request(id));

            claseService.teacherMatter(id)
                .then(
                    result => {
                        dispatch(success(result));
                    },
                    error => {
                        dispatch(failure(error.toString()));
                        dispatch(alertActions.error(error.toString()));
                    }
                );
        };

        function request(id) { return { type: claseConstants.CLASES_MATTER_REQUEST, id } }
        function success(matters) { return { type: claseConstants.CLASES_MATTER_SUCCESS, matters } }
        function failure(error) { return { type: claseConstants.CLASES_MATTER_FAILURE, error } }
    },

};
