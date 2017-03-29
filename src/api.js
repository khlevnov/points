export const fetchPoints = () => {
    return fetch('points.json')
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
        });
};
