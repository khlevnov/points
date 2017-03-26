import React, { Component } from 'react';
import { connect } from 'react-redux';

import Points from '../../components/Points';
import * as actions from '../../actions';

class PointsContainer extends Component {
    componentDidMount() {
        this.props.fetchPoints();
    }

    render() {
        return (
            <Points />
        );
    }
}

export default connect(
    null,
    actions
)(PointsContainer);
