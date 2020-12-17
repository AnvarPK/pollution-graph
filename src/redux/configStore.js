import { createStore, applyMiddleware, combineReducers } from 'redux';
import Pollution from '../redux/reducers/pollution';
import thunk from 'redux-thunk';

const configStore = () => {

    const store = createStore(
        combineReducers({
            pollution: Pollution
        }),
        applyMiddleware(thunk)
    );

    return store;
};


export default configStore;