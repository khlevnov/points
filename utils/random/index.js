const fs = require('fs');
const settings = require('./settings');
const Random = require('./random');

const generator = new Random(settings);
const points = {
    points: generator.generatePoints(),
    pointsRanks: generator.generateRanks(),
    pointsTypes: generator.generateTypes()
};

const file = 'public/points.json';
fs.writeFile(
    './' + file,
    JSON.stringify(points, null, '\t'),
    error => {
        if (error) {
            return console.log(error);
        }
        console.log('Точки успешно сохранены в ' + file);
    }
);
