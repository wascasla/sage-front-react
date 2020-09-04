/*

*/
import { types } from '../types/types';

const initialState = {
    servicios: [],
    subServicios: []
}


export const serviciosReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.getServicios:
            return {
                ...state,
                servicios: (action.payload).slice(),
            }


        default:
            return state;
    }
}