import { agencyConstants } from '../constants';

export default function agencies(state = {}, action) {
	switch (action.type) {
		//Crear agencia
		case agencyConstants.AGENCY_CREATE_REQUEST:
      		return { 
				registering: true 
			};
		case agencyConstants.AGENCY_CREATE_SUCCESS:
			return {};
		case agencyConstants.AGENCY_CREATE_FAILURE:
			return {};
	  
		//DataTable
		case agencyConstants.AGENCY_TABLE_REQUEST:
			return {
				loading: true
			};
		case agencyConstants.AGENCY_TABLE_SUCCESS:
			return {
				data: action.agencies,
				loading: false
			};
		case agencyConstants.AGENCY_TABLE_FAILURE:
			return { 
				error: action.error,
				loading: false
			};

		//obtener sede
		case agencyConstants.AGENCY_GET_REQUEST:
			return {
				searching: true
			};
		case agencyConstants.AGENCY_GET_SUCCESS:
			return {
				agency: action.agency,
			};
		case agencyConstants.AGENCY_GET_FAILURE:
			return {
				error: action.error
			};

		//Actualización de sede
		case agencyConstants.AGENCY_UPDATE_REQUEST:
			return {
				updating: true
			};
		case agencyConstants.AGENCY_UPDATE_SUCCESS:
			return {
				success: true,
				agencyUpdated: action.agency,
			};
		case agencyConstants.AGENCY_UPDATE_FAILURE:
			return {
				error: action.error
			};
	
		default:
		return state
	}
}