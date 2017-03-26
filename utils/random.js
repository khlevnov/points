const settings = {
    ranksRange: {
        min: 1,
        max: 10
    },
    typesRange: {
        min: 1,
        max: 10
    },
    coordinatesRange: {
        lat: {
            min: 43.89242352028746,
            max: 44.06271160622496
        },
        lng: {
            min: 56.26512390810497,
            max: 56.32735885434426
        }
    },
    quantity: 10
};

const getRandom = (min, max) => Math.random() * (max - min) + min;
const getRandomRank = () => {
    return Math.floor(getRandom(settings.ranksRange.min, settings.ranksRange.max + 1));
};
const getRandomType = () => {
    return Math.floor(getRandom(settings.typesRange.min, settings.typesRange.max + 1));
};

const points = [];

for (let i = 0; i < settings.quantity; i++) {
    const point = {
        coordinates: [],
        rank: getRandomRank(),
        type: getRandomType()
    };
    points.push(point);
}

console.log(points);
