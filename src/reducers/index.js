import { combineReducers } from 'redux';

import points from './points';
import pointsRanks from './pointsRanks';
import pointsTypes from './pointsTypes';

const rootReducer = combineReducers({
    points,
    pointsTypes,
    pointsRanks
});

export default rootReducer;
