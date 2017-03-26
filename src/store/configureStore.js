import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger)
    );
};

export default configureStore;
