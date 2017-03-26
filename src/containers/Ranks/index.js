import React from 'react';
import { connect } from 'react-redux';

import Ranks from '../../components/Ranks';
import { getPointsRanks } from '../../reducers';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    ranks: getPointsRanks(state)
});

export default connect(
    mapStateToProps,
    actions
)(Ranks);
