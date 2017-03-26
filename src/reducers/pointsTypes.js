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

const pointsTypes = combineReducers({
    byId,
    activeIds
});

export default pointsTypes;
