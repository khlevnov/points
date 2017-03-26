import React from 'react';
import { ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';

import styles from './styles.scss';

const Types = ({ types }) => (
    <div className={styles.types}>
        {types.map(type =>
            <div key={type.id} className={styles.types__item}>
                <ListItem
                    primaryText={type.name}
                    rightToggle={<Toggle />}
                />
            </div>
        )}
    </div>
);

export default Types;
