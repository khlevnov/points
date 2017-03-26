import React from 'react';
import { Provider } from 'react-redux';

import Points from '../../containers/Points';

const Root = ({ store }) => (
    <Provider store={store}>
        <Points />
    </Provider>
);

export default Root;
