import React from 'react';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';

import styles from './styles.scss';

const Ranks = ({ ranks }) => (
    <div className={styles.ranks}>
        <Subheader>
            Рейтинг точки
            <span className={styles.ranks__value}>
                7/10
            </span>
        </Subheader>
        <div className={styles.ranks__slider}>
            <Slider
                min={1}
                max={10}
                step={1}
                defaultValue={7}
            />
        </div>
    </div>
);

export default Ranks;

/*
{ranks.map(rank =>
    <div key={rank.id} className={styles.ranks__item}>
        {rank.number}
    </div>
)}
*/
