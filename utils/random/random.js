class Random {
    constructor(settings) {
        this.settings = settings;
    }

    getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    getRandomRank() {
        const range = {
            min: this.settings.ranks.range.min,
            max: this.settings.ranks.range.max
        };

        const rank = this.getRandom(range.min, range.max + 1);
        return Math.floor(rank);
    }

    getRandomType() {
        const range = {
            min: this.settings.types.range.min,
            max: this.settings.types.range.max
        };

        const type = this.getRandom(range.min, range.max + 1);
        return Math.floor(type);
    };

    getRandomCoordinates() {
        const range = {
            lng: {
                min: this.settings.coordinates.range.lng.min,
                max: this.settings.coordinates.range.lng.max
            },
            lat: {
                min: this.settings.coordinates.range.lat.min,
                max: this.settings.coordinates.range.lat.max
            }
        };

        return [
            this.getRandom(range.lng.min, range.lng.max),
            this.getRandom(range.lat.min, range.lat.max)
        ];
    };

    generatePoints() {
        const points = {};
        for (let id = 1; id <= this.settings.pointsCount; id++) {
            points[id] = {
                id,
                coordinates: this.getRandomCoordinates(),
                rank: this.getRandomRank(),
                type: this.getRandomType()
            };
        }
        return points;
    }

    generateRanks() {
        const ranks = {};
        for (let id = 1; id <= this.settings.ranks.count; id++) {
            ranks[id] = {
                id,
                number: id
            };
        }
        return ranks;
    }

    generateTypes() {
        const types = {};
        for (let id = 1; id <= this.settings.types.count; id++) {
            types[id] = {
                id,
                name: this.settings.types.names[id - 1]
            };
        }
        return types;
    }
}

module.exports = Random;
