const { fantasyOrScienceFictionAuthors } = require('./exercise5');

describe ('Test exercise 5', () => {
    it ('Testing fantasyOrScienceFictionAuthors', () => {
        expect(fantasyOrScienceFictionAuthors).toStrictEqual([
            'Frank Herbert',
            'George R. R. Martin',
            'Isaac Asimov',
            'J. R. R. Tolkien',
          ]);
    });
});