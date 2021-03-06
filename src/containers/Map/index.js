import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';
import { getFilteredPoints, getAllPoints, getPointsTypesById } from '../../reducers';

class MapContainer extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.ymaps = window.ymaps;
        this.map = null;
        this.clusterer = null;

        this.settings = {
            coordinates: [56.28159173096391, 43.994716063276606],
            zoom: 15
        };
    }

    componentDidMount() {
        this.ymaps.ready(() => {
            this.map = this.createMap();
            this.clusterer = this.getClusterer();
            this.map.geoObjects.add(this.clusterer);
            this.updatePoints();
        });
    }

    componentDidUpdate() {
        if (this.map) {
            this.updatePoints();
        }
    }

    updatePoints() {
        const placemarks = this.getPlacemarks(this.props.points);
        this.clusterer.removeAll();
        this.clusterer.add(placemarks);
    }

    createMap() {
        return new this.ymaps.Map('map', {
            center: this.settings.coordinates,
            zoom: this.settings.zoom
        });
    }

    getPlacemarks(points) {
        return points.map(point => {
            return new this.ymaps.Placemark(point.coordinates, {}, {
                preset: 'islands#icon',
                iconColor: this.props.typesById[point.type].color
            });
        });
    }

    getClusterer() {
        return new this.ymaps.Clusterer({
            preset: 'islands#grayClusterIcons',
            hasBaloon: false,
            hasHint: false,
            minClusterSize: 3,
            gridSize: 64
        });
    }

    render() {
        return (
            <Map />
        );
    }
}

const mapStateToProps = state => ({
    points: getFilteredPoints(state),
    allPoints: getAllPoints(state),
    typesById: getPointsTypesById(state)
});

export default connect(
    mapStateToProps,
)(MapContainer);
