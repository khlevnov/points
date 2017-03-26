import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );
};

export default configureStore;
