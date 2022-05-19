const { swap } = require('./exercise5');

describe ('Testing exercise 5', () => {
    it ('tests swap', () => {
        const myList = [1, 2, 3];
        expect(swap(myList)).toStrictEqual([3, 2, 1]);
    })
})