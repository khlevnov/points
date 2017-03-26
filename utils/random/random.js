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
        let id = 1;
        const points = [];

        for (let i = 0; i < this.settings.pointsCount; i++) {
            points.push({
                id,
                coordinates: this.getRandomCoordinates(),
                rank: this.getRandomRank(),
                type: this.getRandomType()
            });

            id++;
        }

        return points;
    }

    generateRanks() {
        let id = 1;
        const ranks = [];

        for (let i = 0; i < this.settings.ranks.count; i++) {
            ranks.push({
                id,
                number: id
            });

            id++;
        }

        return ranks;
    }

    generateTypes() {
        let id = 1;
        const types = [];

        for (let i = 0; i < this.settings.types.count; i++) {
            types.push({
                id,
                name: this.settings.types.names[id - 1]
            });

            id++;
        }

        return types;
    }
}

module.exports = Random;
