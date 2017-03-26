import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

import Ranks from '../../containers/Ranks';
import Types from '../../containers/Types';

import styles from './styles.scss';

const Filter = () => (
    <div className={styles.filter}>
        <List>
            <Subheader>Рейтинг точек</Subheader>
            <ListItem
                primaryText="When calls and notifications arrive"
                secondaryText="Always interrupt"
            />
        </List>
        <Divider />
        <List>
            <div className={styles.filter__types}>
                <Subheader>Типы точек</Subheader>
                <Types />
            </div>
        </List>
    </div>
);

export default Filter;

/*

<ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
<ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
<ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />

<div className={styles.filter}>
    <div className={styles.filter__ranks}>
        <Ranks />
    </div>
    <div className={styles.filter__types}></div>
</div>
*/
