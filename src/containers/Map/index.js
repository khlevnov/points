import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';
import { getPoints, getPointsTypesById } from '../../reducers';

class MapContainer extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.ymaps = window.ymaps;
        this.map = null;
        // this.clusterer = null;
        this.objectManagers = null;

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
            this.objectManager = this.getObjectManager();
            this.objectManager.add(this.props.points.map(point => ({
                'type': 'Feature',
                'id': point.id,
                'geometry': {
                    'type': 'Point',
                    'coordinates': point.coordinates
                },
                'options': {
                    'iconColor': this.props.typesById[point.type].color
                }
            })));
            this.map.geoObjects.add(this.objectManager);
            // this.clusterer = this.getClusterer();
            // this.map.geoObjects.add(this.clusterer);
            this.updatePoints();
        });
    }

    componentDidUpdate() {
        if (this.map) {
            this.updatePoints();
        }
    }

    updatePoints() {
        const activeIds = this.props.points.map(point => point.id);

        this.objectManager.setFilter(point => {
            return _.includes(activeIds, point.id);
        });
        // const placemarks = this.getPlacemarks(this.props.points);
        // this.clusterer.removeAll();
        // this.clusterer.add(placemarks);
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

    getObjectManager() {
        return new this.ymaps.ObjectManager({
            clusterize: true
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
    points: getPoints(state),
    typesById: getPointsTypesById(state)
});

export default connect(
    mapStateToProps,
)(MapContainer);
