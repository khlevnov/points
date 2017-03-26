import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from 'components/Root';

const points = () => {
    ReactDOM.render(
        <Root store={configureStore()} />,
        document.querySelector('.page-wrapper')
    );
};

points();
