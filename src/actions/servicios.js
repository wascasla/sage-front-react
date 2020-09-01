import { types } from "../types/types";

const servicios = [1,2,3,4];


export const getServicios = () => ({
    type: types.getServicios,
    payload: servicios
})