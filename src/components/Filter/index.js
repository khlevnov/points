import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Ranks from '../../containers/Ranks';
import Types from '../../containers/Types';

import styles from './styles.scss';

const Filter = () => (
    <div className={styles.filter}>
        <List>
            <div className={styles.filter__ranks}>
                <Ranks />
            </div>
        </List>
        <Divider />
        <List>
            <div className={styles.filter__types}>
                <Types />
            </div>
        </List>
    </div>
);

export default Filter;
