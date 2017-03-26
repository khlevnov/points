import _ from 'lodash';
import * as api from '../api';

export const fetchPoints = () => (dispatch, getState) => {
    api.fetchPoints().then(response => {
        const activeRankId = parseInt(_.first(Object.keys(response.pointsRanks)), 10);
        const activePointsIds = _.filter(response.points, { rank: activeRankId });

        const inititalState = {
            points: {
                activeIds: activePointsIds,
                byId: response.points
            },
            pointsRanks: {
                activeId: activeRankId,
                byId: response.pointsRanks
            },
            pointsTypes: {
                byId: response.pointsTypes
            }
        };

        dispatch(receivePoints(inititalState));
    });
};

export const receivePoints = ({ points, pointsRanks, pointsTypes }) => ({
    type: 'RECEIVE_POINTS',
    points,
    pointsRanks,
    pointsTypes
});

export const setRank = (rankId) => ({
    type: 'SET_POINTS_RANK',
    rankId
});

export const setType = (typeId) => ({
    type: 'SET_POINTS_TYPE',
    typeId
});
