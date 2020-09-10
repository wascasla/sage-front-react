import React from 'react';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startGetServiciosByDocumento } from '../../actions/servicios';



const FormBusquedaServiciosAgente = () => {
	const dispatch = useDispatch();

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


		<form onSubmit={handleSubmit} noValidate autoComplete='off' >

			{/* <TextField id='outlined-basic' name={dni} value={dni} label='DNI AGENTE' variant='outlined' />

					<Button variant='contained'>...</Button>
					

					<div className={classes.item}>
						<FormControlLabel
							control={<Switch checked={checked} onChange={handleChange} name="gilad" />}
							label="Activos"
						/>
					</div>

					
					<Button type='submit' variant='contained' size='large' color='primary'>
						Ver
					</Button> */}

		</form>


	);
};

export default FormBusquedaServiciosAgente;
