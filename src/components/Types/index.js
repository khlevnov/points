import React from 'react';

import styles from './styles.scss';

const Types = ({ types }) => (
    <div className={styles.types}>
        {types.map(type =>
            <div key={type.id} className={styles.types__item}>
                {type.name}
            </div>
        )}
    </div>
);

export default Types;
