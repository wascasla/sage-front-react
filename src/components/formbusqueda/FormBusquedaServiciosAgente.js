import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startGetServiciosByDocumento } from '../../actions/servicios';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},
	paper: {
		padding: theme.spacing(3),
		margin: theme.spacing(1),
		display: 'flex',
		//overflow: 'auto',
		flexDirection: 'row',

	},
	item: {
		//padding: theme.spacing(1),
		padding: '0 30px',
		display: 'flex',
		flexDirection: 'row',
	},
	fixedHeight: {
		height: 240
	}
}));

const FormBusquedaServiciosAgente = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	const initialForm = {
		dni: '',
		activos: false,
	};

	const [formValues, handleInputChange, reset] = useForm(initialForm);
	const { dni, activos } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startGetServiciosByDocumento(32055277));
	}

	return (
		<Grid item xs={12}>
			<Paper >

				<form onSubmit={handleSubmit} noValidate autoComplete='off' className={classes.paper}>
					{/* <div className={classes.item}> */}
					<TextField id='outlined-basic' name={dni} value={dni} label='DNI AGENTE' variant='outlined' />

					<Button variant='contained'>...</Button>
					{/* </div> */}

					<div className={classes.item}>
						<FormControlLabel
							control={<Switch checked={checked} onChange={handleChange} name="gilad" />}
							label="Activos"
						/>
					</div>

					{/* <div > */}
					<Button type='submit' variant='contained' size='large' color='primary'>
						Ver
					</Button>
					{/* </div> */}
				</form>

			</Paper>
		</Grid>
	);
};

export default FormBusquedaServiciosAgente;
