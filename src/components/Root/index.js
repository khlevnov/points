import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Points from '../../containers/Points';

import normalize from 'normalize.css';
import base from '../../styles/base.scss';

injectTapEventPlugin();

const Root = ({ store }) => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Points />
        </MuiThemeProvider>
    </Provider>
);

export default Root;
