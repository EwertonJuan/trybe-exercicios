const { oldBooksOrdered } = require('./exercise4');

describe ('Test exercise 4', () => {
    it ('Testing oldBooksOrdered', () => {
        expect(oldBooksOrdered).toStrictEqual([
            {
              id: 6,
              name: 'O Chamado de Cthulhu',
              genre: 'Terror',
              author: { name: 'H. P. Lovecraft', birthYear: 1890 },
              releaseYear: 1928,
            },
            {
              id: 3,
              name: 'Fundação',
              genre: 'Ficção Científica',
              author: { name: 'Isaac Asimov', birthYear: 1920 },
              releaseYear: 1951,
            },
            {
              id: 2,
              name: 'O Senhor dos Anéis',
              genre: 'Fantasia',
              author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
              releaseYear: 1954,
            },
          ]);
    });
});