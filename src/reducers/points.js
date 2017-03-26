import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POINTS':
            return action.response.points.reduce((points, point) => {
                points[point.id] = point;
                return points;
            }, {});

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

export const getPoints = (state) => {
    return state.activeIds.map(id => state.byId[id]);
};
