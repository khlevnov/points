const settings = require('./settings');
const Random = require('./random');

const generator = new Random(settings);
const points = {
    points: generator.generatePoints(),
    pointsRanks: generator.generateRanks(),
    pointsTypes: generator.generateTypes()
};

console.log(points);
