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
            return parseInt(action.pointsRanks.activeId, 10);

        case 'SET_POINTS_RANK':
            return action.rankId;

        default:
            return state;
    }
};

const pointsRanks = combineReducers({
    byId,
    activeId
});

export default pointsRanks;

export const getRanks = (state) => {
    return Object.keys(state.byId).map(id => state.byId[id]);
};

export const getActiveRank = (state) => {
    return getActiveRankId(state);
};

export const getActiveRankId = (state) => {
    return state.activeId || 5;
};
