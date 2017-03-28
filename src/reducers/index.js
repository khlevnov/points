import _ from 'lodash';
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

export const getPoints = state => {
    let points = fromPoints.getPoints(state.points);

    const activeRankId = getActiveRankId(state);
    if (activeRankId) {
        points = points.filter(point => point.rank === activeRankId);
    }

    const activePointsTypesIds = getActivePointsTypesIds(state);
    if (activePointsTypesIds) {
        points = points.filter(point => _.includes(activePointsTypesIds, point.type));
    }

    return points;
};

export const getPointsTypes = state => {
    return fromPointsTypes.getPointsTypes(state.pointsTypes);
};

export const getPointsTypesById = state => {
    return fromPointsTypes.getPointsTypesById(state.pointsTypes);
};

export const getPointsTypesIds = state => {
    return fromPointsTypes.getPointsTypesIds(state.pointsTypes);
};

export const getActivePointsTypesIds = state => {
    return fromPointsTypes.getActivePointsTypesIds(state.pointsTypes);
};

export const getActiveRank = state => {
    return fromPointsRanks.getActiveRank(state.pointsRanks);
};

export const getActiveRankId = state => {
    return fromPointsRanks.getActiveRankId(state.pointsRanks);
};

export const getRanks = state => {
    return fromPointsRanks.getRanks(state.pointsRanks);
};
