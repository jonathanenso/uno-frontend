import { claseConstants } from '../constants/clases.constants';

export default function clases(state = {}, action) {
	switch (action.type) {
		//Crear clase
		case claseConstants.CLASES_CREATE_REQUEST:
      		return { 
				registering: true 
			};
		case claseConstants.CLASES_CREATE_SUCCESS:
			return {};
		case claseConstants.MATTER_CREATE_FAILURE:
			return {};

		//DataTable
		case claseConstants.CLASES_TABLE_REQUEST:
			return {
				loading: true
			};
		case claseConstants.CLASES_TABLE_SUCCESS:
			return {
				data: action.clases,
				loading: false
			};
		case claseConstants.CLASES_TABLE_FAILURE:
			return { 
				error: action.error,
				loading: false
			};

		//obtener materia
		case claseConstants.CLASES_GET_REQUEST:
			return {
				searching: true
			};
		case claseConstants.CLASES_GET_SUCCESS:
			return {
				searched:true,
				matter: action.clase,
			};
		case claseConstants.CLASES_GET_FAILURE:
			return {
				error: action.error
			};

		//Actualización de materia
		case claseConstants.CLASES_UPDATE_REQUEST:
			return {
				updating: true
			};
		case claseConstants.CLASES_UPDATE_SUCCESS:
			return {
				success: true,
				claseUpdated: action.clase,
			};
		case claseConstants.CLASES_UPDATE_FAILURE:
			return {
				error: action.error
			};

		//DataTable
		case claseConstants.CLASES_MATTER_REQUEST:
			return {
				getting: true
			};
		case claseConstants.CLASES_MATTER_SUCCESS:
			return {
				userMatter: action.matters,
				getting: false
			};
		case claseConstants.CLASES_MATTER_FAILURE:
			return { 
				error: action.error,
				loading: false
			};
	
		default:
		return state
	}
}