import React from 'react';

import Ranks from '../../containers/Ranks';
import Types from '../../containers/Types';

import styles from './styles.scss';

const Filter = () => (
    <div className={styles.filter}>
        <div className={styles.filter__ranks}>
            <Ranks />
        </div>
        <div className={styles.filter__types}>
            <Types />
        </div>
    </div>
);

export default Filter;
