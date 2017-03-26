import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const activeId = (state = 0, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const pointsRanks = combineReducers({
    byId,
    activeId
});

export default pointsRanks;
