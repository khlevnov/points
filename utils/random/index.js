const fs = require('fs');
const settings = require('./settings');
const Random = require('./random');

process.argv.slice(2).forEach(value => {
    const matches = value.match(/--count=(\w+)/);
    if (matches) {
        settings.pointsCount = matches[1];
    }
});

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
