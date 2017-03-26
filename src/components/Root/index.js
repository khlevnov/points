import React from 'react';
import { Provider } from 'react-redux';

import Points from '../../containers/Points';

import normalize from 'normalize.css';
import base from '../../styles/base.scss';

const Root = ({ store }) => (
    <Provider store={store}>
        <Points />
    </Provider>
);

export default Root;
