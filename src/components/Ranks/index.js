import React from 'react';

import styles from './styles.scss';

const Ranks = ({ ranks }) => (
    <div className={styles.ranks}>
        {ranks.map(rank =>
            <div key={rank.id} className={styles.ranks__item}>
                {rank.number}
            </div>
        )}
    </div>
);

export default Ranks;
