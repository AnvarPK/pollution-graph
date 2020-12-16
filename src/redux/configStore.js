import { createStore } from 'redux';
import  Pollution from '../redux/reducers/pollution'

export default () => {

    const store = createStore(
        Pollution
        // combineReducers({
        //     vehicles: vehiclesReducer,
        //     filters: filtersReducer,
        //     language: languageReducer
        // })
    );

    return store;
};


