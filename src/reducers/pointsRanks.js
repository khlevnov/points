import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.pointsRanks.byId;

        default:
            return state;
    }
};

const activeId = (state = null, action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.pointsRanks.activeId;

        default:
            return state;
    }
};

const pointsRanks = combineReducers({
    byId,
    activeId
});

export default pointsRanks;

export const getPointsRanks = (state) => {
    return Object.keys(state.byId).map(id => state.byId[id]);
};
