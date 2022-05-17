const { nameAndAge } = require('./exercise2');

describe('Test exercise 2', () => {
    it('Testing nameAndAge', () => {
        expect(nameAndAge).toStrictEqual([{
                age: 31,
                author: 'Isaac Asimov',
            },
            {
                age: 38,
                author: 'H. P. Lovecraft',
            },
            {
                age: 39,
                author: 'Stephen King',
            },
            {
                age: 43,
                author: 'George R. R. Martin',
            },
            {
                age: 45,
                author: 'Frank Herbert',
            },
            {
                age: 62,
                author: 'J. R. R. Tolkien',
            },
        ]);
    });
});