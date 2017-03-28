import React from 'react';
import { connect } from 'react-redux';

import Ranks from '../../components/Ranks';
import { getRanks, getActiveRank } from '../../reducers';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    activeRank: getActiveRank(state)
});

export default connect(
    mapStateToProps,
    actions
)(Ranks);
