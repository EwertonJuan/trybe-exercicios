const { flatten } = require('./exercise1');

describe ('Testing exercise 1', () => {
    it ('Test flatten', () => {
        expect(flatten()).toStrictEqual(['1', '2', '3', true, 4, 5, 6]);
    });
});