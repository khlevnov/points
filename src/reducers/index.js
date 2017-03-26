import { combineReducers } from 'redux';

import points, * as fromPoints from './points';
import pointsRanks from './pointsRanks';
import pointsTypes from './pointsTypes';

const rootReducer = combineReducers({
    points,
    pointsTypes,
    pointsRanks
});

export default rootReducer;

export const getPoints = (state) => {
    return fromPoints.getPoints(state.points);
};
