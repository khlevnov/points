import _ from 'lodash';
import * as api from '../api';

export const fetchPoints = () => (dispatch, getState) => {
    api.fetchPoints().then(response => {
        const activeRankId = parseInt(_.first(Object.keys(response.pointsRanks)), 10);
        const activePointsIds = Object.keys(response.points).map(id => parseInt(id, 10));
        // const activePointsIds = _.filter(response.points, { rank: activeRankId })
        //     .map(point => point.id);

        dispatch({
            type: 'RECEIVE_POINTS',
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
