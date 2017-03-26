const state = {
    points: {
        activePoints: [
            1, 3, 4
        ],
        byId: {
            1: {
                id: 1,
                rank: 3,
                type: 3
            },
            2: {
                id: 2,
                rank: 1,
                type: 2
            },
            3: {
                id: 3,
                rank: 2,
                type: 1
            },
            4: {
                id: 4,
                rank: 3,
                type: 1
            }
        }
    },
    pointsTypes: {
        1: {
            id: 1,
            name: 'Театр'
        },
        2: {
            id: 2,
            name: 'Кинотеатр'
        },
        3: {
            id: 3,
            name: 'Кафе'
        }
    },
    pointsRanks: {
        1: {
            id: 1,
            number: 1
        },
        2: {
            id: 2,
            number: 2
        },
        3: {
            id: 3,
            number: 3
        }
    }
};

export default state;
