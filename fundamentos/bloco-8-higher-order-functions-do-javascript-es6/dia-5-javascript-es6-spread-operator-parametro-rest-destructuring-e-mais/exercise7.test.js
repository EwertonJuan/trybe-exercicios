const { shipLength } = require('./exercise7');

describe ('Testing exercise 7', () => {
    it ('tests shipLength', () => {
        const ships = [
            {
              name: 'Titanic',
              length: 269.1,
              measurementUnit: 'meters',
            },
            {
              name: 'Queen Mary 2',
              length: 1132,
              measurementUnit: 'feet',
            },
            {
              name: 'Yamato',
              length: 256,
              measurementUnit: 'meters',
            },
          ];
        expect(shipLength(ships[0])).toBe('Titanic is 269.1 meters long');
        expect(shipLength(ships[1])).toBe('Queen Mary 2 is 1132 feet long');
        expect(shipLength(ships[2])).toBe('Yamato is 256 meters long');
    })
})