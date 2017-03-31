const state = {
    points: {
        activeIds: [
            1, 3, 4
        ],
        byId: {
            1: {
                id: 1,
                coordinates: [56.325408452379754, 43.871542512025194],
                rank: 3,
                type: 3
            },
            2: {
                id: 2,
                coordinates: [56.289802495688036, 43.945593068706614],
                rank: 1,
                type: 2
            },
            3: {
                id: 3,
                coordinates: [56.31041811696798, 44.03623027573787],
                rank: 2,
                type: 1
            },
            4: {
                id: 4,
                coordinates: [56.264972580588285, 43.992284963237864],
                rank: 3,
                type: 1
            }
        }
    },
    pointsTypes: {
        activeIds: [
            1, 2
        ],
        byId: {
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
        }
    },
    pointsRanks: {
        activeId: 2,
        byId: {
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
    }
};

export default state;
