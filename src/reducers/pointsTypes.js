import _ from 'lodash';
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
        case 'RECEIVE_POINTS':
            return action.pointsTypes.activeIds;

        case 'TOGGLE_POINTS_TYPE':
            return _.xor([action.typeId], state);

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
    return Object.keys(state.byId).map(id => ({
        ...state.byId[id],
        active: _.includes(state.activeIds, parseInt(id, 10))
    }));
};

export const getPointsTypesById = state => {
    return state.byId;
};

export const getActivePointsTypesIds = state => {
    return state.activeIds;
};
