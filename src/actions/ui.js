import { types } from '../types/types';

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveError

});

export const startLoading = () => ({
    type: types.uiMostrarCargando
});

export const removeLoading = () => ({
    type: types.uiOcultarCargando
});