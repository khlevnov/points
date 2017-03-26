import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.pointsTypes.byId;

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

export const getPointsTypes = state => {
    return Object.keys(state.byId).map(id => state.byId[id]);
};

export const getPointsTypesById = state => {
    return state.byId;
};
