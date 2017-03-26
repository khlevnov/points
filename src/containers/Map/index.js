import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';
import { getPoints } from '../../reducers';

class YandexMaps extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.ymaps = window.ymaps;
        this.map = null;
        this.clusterer = null;

        this.settings = {
            coordinates: [
                56.30170513395401, 43.96532096131706
            ],
            zoom: 12
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
            return new this.ymaps.Placemark(point.coordinates);
        });
    }

    getClusterer() {
        return new this.ymaps.Clusterer({
            preset: 'islands#invertedNightClusterIcons',
            groupByCoordinates: false,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,
            clusterDisableClickZoom: false,
            hasBaloon: false,
            useMapMargin: false,
            gridSize: 80
        });
    }

    render() {
        return (
            <Map />
        );
    }
}

const mapStateToProps = state => ({
    points: getPoints(state)
});

export default connect(
    mapStateToProps,
)(YandexMaps);
