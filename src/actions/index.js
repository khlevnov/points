import * as api from '../api';

export const fetchPoints = () => (dispatch, getState) => {
    api.fetchPoints().then(response => {
        dispatch(receivePoints(response));
    });
};

export const receivePoints = (response) => ({
    type: 'RECEIVE_POINTS',
    response
});

export const setRank = (rankId) => ({
    type: 'SET_POINTS_RANK',
    rankId
});

export const setType = (typeId) => ({
    type: 'SET_POINTS_TYPE',
    typeId
});
