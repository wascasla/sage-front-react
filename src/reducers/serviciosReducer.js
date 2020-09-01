/*

*/
import { types } from '../types/types';


export const serviciosReducer = ( state= {}, action) => {

    switch (action.type) {
        case types.getServicios:
            return {
                servicios: action.payload.servicios,
            }
            
    
        default:
            return state;
    }
}