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
    let points = fromPoints.getPoints(state.points);

    const activeRankId = getActiveRankId(state);
    console.log(activeRankId);
    if (activeRankId) {
        points = points.filter(point => point.rank === activeRankId);
    }

    return points;
};

export const getPointsTypes = (state) => {
    return fromPointsTypes.getPointsTypes(state.pointsTypes);
};

export const getPointsTypesById = (state) => {
    return fromPointsTypes.getPointsTypesById(state.pointsTypes);
};

export const getActiveRank = (state) => {
    return fromPointsRanks.getActiveRank(state.pointsRanks);
};

export const getActiveRankId = (state) => {
    return fromPointsRanks.getActiveRankId(state.pointsRanks);
};

export const getRanks = (state) => {
    return fromPointsRanks.getRanks(state.pointsRanks);
};
