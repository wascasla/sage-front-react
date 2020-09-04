import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    //headers: {
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Credentials': 'true',
    //},
    //crossDomain: true
    //baseURL: "http://localhost:5000"
});

export default clienteAxios;