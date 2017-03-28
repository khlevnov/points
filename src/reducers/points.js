import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.points.byId;

        default:
            return state;
    }
};

const activeIds = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.points.activeIds;

        default:
            return state;
    }
};

const points = combineReducers({
    byId,
    activeIds
});

export default points;

export const getPoints = (state) => {
    return state.activeIds.map(id => state.byId[id]);
};

export const getAllPoints = (state) => {
    return Object.keys(state.byId).map(id => state.byId[id]);
};
