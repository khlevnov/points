import * as api from '../api';

export const fetchPoints = () => (dispatch, getState) => {
    api.fetchPoints().then(response => {
        dispatch({
            type: 'RECEIVE_POINTS',
            points: {
                activeIds: Object.keys(response.points).map(id => parseInt(id, 10)),
                byId: response.points
            },
            pointsRanks: {
                byId: response.pointsRanks
            },
            pointsTypes: {
                activeIds: Object.keys(response.pointsTypes).map(id => parseInt(id, 10)),
                byId: response.pointsTypes
            }
        });
    });
};

export const setPointsRank = rankId => ({
    type: 'SET_POINTS_RANK',
    rankId
});

export const togglePointsType = typeId => ({
    type: 'TOGGLE_POINTS_TYPE',
    typeId
});
