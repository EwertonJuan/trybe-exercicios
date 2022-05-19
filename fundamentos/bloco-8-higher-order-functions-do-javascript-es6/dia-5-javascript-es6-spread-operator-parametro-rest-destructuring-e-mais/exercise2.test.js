const { sum } = require('./exercise2');

describe ('Testing exercise 2', () => {
    it ('tests sum', () => {
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum(1, 2, 3, 4)).toBe(10);
    })
})