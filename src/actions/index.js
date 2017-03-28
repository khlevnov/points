import _ from 'lodash';
import * as api from '../api';

export const fetchPoints = () => (dispatch, getState) => {
    api.fetchPoints().then(response => {
        const activePointsIds = Object.keys(response.points).map(id => parseInt(id, 10));

        dispatch({
            type: 'RECEIVE_POINTS',
            points: {
                activeIds: activePointsIds,
                byId: response.points
            },
            pointsRanks: {
                byId: response.pointsRanks
            },
            pointsTypes: {
                byId: response.pointsTypes
            }
        });
    });
};

export const setRank = (rankId) => ({
    type: 'SET_POINTS_RANK',
    rankId
});

export const setType = (typeId) => ({
    type: 'SET_POINTS_TYPE',
    typeId
});
