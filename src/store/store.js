import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { serviciosReducer } from '../reducers/serviciosReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    servicios: serviciosReducer
})

export const store = createStore(
    reducers,
    composeEnhancers( /*el thunk e spara trabajar acciones asincronas */
        applyMiddleware(thunk)
    )
    );