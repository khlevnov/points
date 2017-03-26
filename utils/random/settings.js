const settings = {
    pointsCount: 10,
    ranks: {
        count: 10,
        range: {
            min: 1,
            max: 10
        }
    },
    types: {
        count: 10,
        range: {
            min: 1,
            max: 10
        },
        names: [
            'Кафе',
            'Кинотеатр',
            'Музей',
            'Театр',
            'Ресторан',
            'Галерея',
            'Торговый центр',
            'Бар',
            'Магазин',
            'Школа'
        ]
    },
    coordinates: {
        range: {
            lng: {
                min: 56.26512390810497,
                max: 56.32735885434426
            },
            lat: {
                min: 43.89242352028746,
                max: 44.06271160622496
            }
        }
    }
};

module.exports = settings;
