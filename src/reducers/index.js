import { combineReducers } from 'redux';

import points, * as fromPoints from './points';
import pointsRanks, * as fromPointsRanks from './pointsRanks';
import pointsTypes, * as fromPointsTypes from './pointsTypes';

const rootReducer = combineReducers({
    points,
    pointsTypes,
    pointsRanks
});

export default rootReducer;

export const getPoints = (state) => {
    return fromPoints.getPoints(state.points);
};

export const getPointsTypes = (state) => {
    return fromPointsTypes.getPointsTypes(state.pointsTypes);
};

export const getPointsTypesById = (state) => {
    return fromPointsTypes.getPointsTypesById(state.pointsTypes);
};

export const getPointsRanks = (state) => {
    return fromPointsRanks.getPointsRanks(state.pointsRanks);
};
