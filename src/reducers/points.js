import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const activeIds = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const points = combineReducers({
    byId,
    activeIds
});

export default points;
