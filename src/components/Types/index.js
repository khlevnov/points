import React from 'react';
import { ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

import styles from './styles.scss';

const Types = ({ types }) => (
    <div className={styles.types}>
        <Subheader>Типы точек</Subheader>
        {types.map(type =>
            <div key={type.id} className={styles.types__item}>
                <ListItem
                    primaryText={type.name}
                    rightToggle={<Toggle />}
                    style={{
                        fontSize: '14px'
                    }}
                />
            </div>
        )}
    </div>
);

export default Types;
