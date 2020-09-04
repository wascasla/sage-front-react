import { types } from "../types/types";
import clienteAxios from '../config/axios';

//const servicios = [1, 2, 3, 4];


export const getServicios = (servicios) => ({
    type: types.getServicios,
    payload: servicios
})

export const startGetServiciosByDocumento = (dni) => {
    return async (dispatch) => {

        // await clienteAxios.get(`servicio/activo/documento/32055277/organizacion/-1/usuario/34721520`,
        //     {
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //         }
        //     })
        //     .then(response => console.log(response))
        //     .catch(error => { console.log(error) })

        const respuesta = await clienteAxios.get(`servicio/activo/documento/32055277/organizacion/-1/usuario/34721520`);
        //const res = await respuesta.json();
        console.log(respuesta.data);

        dispatch(getServicios(respuesta.data));


        // fetch("http://181.15.95.205:8080/jsage/api/servicio/activo/documento/32055277/organizacion/-1/usuario/34721520")
        //     .then(res => console.log(res.json()))
        //     .catch(error => console.log(error));



    }
}