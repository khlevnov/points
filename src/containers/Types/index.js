import React from 'react';
import { connect } from 'react-redux';

import Types from '../../components/Types';
import { getPointsTypes } from '../../reducers';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    types: getPointsTypes(state)
});

export default connect(
    mapStateToProps,
    actions
)(Types);
