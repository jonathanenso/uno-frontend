/* eslint-disable */
import { apiUrl } from '../config/config';
import authHeader from '../helpers/auth-header';
import handleResponse from '../helpers/handleResponse';
export const claseService = {

    claseTable: async (pageIndex, pageSize, sortBy, globalFilter) => {

        const requestOptions = {
            method: 'POST',
            headers: { ... authHeader(), 'Content-Type': 'application/json' },
        };
    
        const response = await fetch(`${apiUrl}/classes/table-class`, requestOptions);
        return handleResponse(response);
            
    },

    createClase: async (clase) => {
        const requestOptions = {
            method: 'POST',
            headers: { ... authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(clase)
        };
    
        const response = await fetch(`${apiUrl}/classes/create-class`, requestOptions);
        return handleResponse(response);
    },

    claseUpdate: async (id, clase) => {
        const requestOptions = {
            method: 'PUT',
            headers: { ... authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(clase)
        };
    
        const response = await fetch(`${apiUrl}/classes/update-class/${id}`, requestOptions);
        await handleResponse(response);
        return clase;
    },

    claseGet: async (id) => {
        const requestOptions = {
            method: 'GET',
            headers: { ... authHeader(), 'Content-Type': 'application/json' },
        };
    
        const response = await fetch(`${apiUrl}/classes/get-class/${id}`, requestOptions);
        return await handleResponse(response);
    },

    teacherMatter: async (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { ... authHeader(), 'Content-Type': 'application/json' },
        };
    
        const response = await fetch(`${apiUrl}/classes/teacher-matter/${id}`, requestOptions);
        return await handleResponse(response);
    }

}
