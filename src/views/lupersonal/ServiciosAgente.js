import React from 'react';
import Dashboard from '../../components/layout/Dashboard';
import FormBusquedaServiciosAgente from '../../components/formbusqueda/FormBusquedaServiciosAgente';
import { makeStyles } from '@material-ui/core/styles';
import ListServiciosAgentes from '../../components/list/ListServiciosAgentes';
import ListSubServiciosAgentes from '../../components/list/ListSubServiciosAgentes';

const useStyles = makeStyles((theme) => ({
	root: {
        //padding: theme.spacing(3),
        //paddingTop: '30px',
		display: 'flex',
		//overflow: 'auto',
		flexDirection: 'column'
    },
    form: {
        padding: '20px',
        margin: '20px'
    },
    paper: {
        padding: theme.spacing(3),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
}));

const ServiciosAgente = () => {
	const classes = useStyles();

	return (
		
			<Dashboard className={classes.paper}>
                {/* <div > */}
				<h1>Servicios agente</h1>
				<FormBusquedaServiciosAgente className={classes.form} />
                <h2>Lista Servicios</h2>
                <ListServiciosAgentes  className={classes.form}/>
                <h2>Lista SubServicios</h2>
                <ListSubServiciosAgentes className={classes.form} />
                {/* </div> */}
			</Dashboard>
		
	);
};

export default ServiciosAgente;
