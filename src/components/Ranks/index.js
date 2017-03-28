import React from 'react';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';

import styles from './styles.scss';

const Ranks = ({ activeRank, setPointsRank }) => (
    <div className={styles.ranks}>
        <Subheader>
            Рейтинг точки
            <span className={styles.ranks__value}>
                {activeRank}/10
            </span>
        </Subheader>
        <div className={styles.ranks__slider}>
            <Slider
                min={1}
                max={10}
                step={1}
                defaultValue={activeRank}
                onChange={(event, rank) => setPointsRank(rank)}
            />
        </div>
    </div>
);

export default Ranks;
