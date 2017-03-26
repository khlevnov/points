import React from 'react';

import Map from '../../containers/Map';
import Filter from '../Filter';

import styles from './styles.scss';

const Points = () => (
    <div className={styles.points}>
        <div className={styles.points__filter}>
            <Filter />
        </div>
        <div className={styles.points__map}>
            <Map />
        </div>
    </div>
);

export default Points;
