const { longestNamedBook } = require('./exercise4');

describe ('Testing exercise4', () => {
    it ('Tests longestNamedBook', () => {
        expect(longestNamedBook).toStrictEqual({
            id: 1,
            name: 'As Crônicas de Gelo e Fogo',
            genre: 'Fantasia',
            author: {
              name: 'George R. R. Martin',
              birthYear: 1948,
            },
            releaseYear: 1991,
          });
    });
});