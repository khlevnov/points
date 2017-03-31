import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.points.byId;

        default:
            return state;
    }
};

const points = combineReducers({
    byId
});

export default points;

export const getPoints = (state) => {
    return Object.keys(state.byId).map(id => state.byId[id]);
};
