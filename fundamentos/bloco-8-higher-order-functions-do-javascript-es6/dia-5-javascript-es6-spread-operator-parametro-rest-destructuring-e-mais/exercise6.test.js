const { toObject } = require('./exercise6');

describe ('Testing exercise 6', () => {
    it ('tests toObject', () => {
        const palio = ['Palio', 'Fiat', 2019];
        const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
        const chiron = ['Chiron', 'Bugatti', 2016];
        expect(toObject(palio)).toStrictEqual(
            expect.objectContaining({
                name: 'Palio',
                manufacturer: 'Fiat',
                year: 2019,
            })
        );
        expect(toObject(shelbyCobra)).toStrictEqual(
            expect.objectContaining({
                name: 'Shelby Cobra',
                manufacturer: 'Ford',
                year: 1963,
            })
        );
        expect(toObject(chiron)).toStrictEqual(
            expect.objectContaining({
                name: 'Chiron',
                manufacturer: 'Bugatti',
                year: 2016,
            })
        );
    })
})