import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
// import initialState from './store/model';
import Root from 'components/Root';

const points = () => {
    const store = configureStore();

    ReactDOM.render(
        <Root store={store} />,
        document.getElementById('root')
    );

    window.state = store.getState();
};

points();
