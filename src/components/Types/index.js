import React from 'react';
import { ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

import { fade } from 'material-ui/utils/colorManipulator';

import styles from './styles.scss';

const Types = ({ types }) => (
    <div className={styles.types}>
        <Subheader>Типы точек</Subheader>
        {types.map(type =>
            <div key={type.id} className={styles.types__item}>
                <ListItem
                    primaryText={type.name}
                    rightToggle={
                        <Toggle
                            defaultToggled={type.active}
                            trackSwitchedStyle={{
                                backgroundColor: fade(type.color, 0.3)
                            }}
                            thumbSwitchedStyle={{
                                backgroundColor: type.color
                            }}
                        />
                    }
                    style={{
                        fontSize: '14px'
                    }}
                />
            </div>
        )}
    </div>
);

export default Types;
