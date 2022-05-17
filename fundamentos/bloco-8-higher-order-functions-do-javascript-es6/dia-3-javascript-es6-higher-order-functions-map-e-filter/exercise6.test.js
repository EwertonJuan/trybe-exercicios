const { oldBooks } = require('./exercise6');

describe ('Test exercise 6', () => {
    it ('Testing oldBooks', () => {
        expect(oldBooks).toStrictEqual([
            'O Senhor dos Anéis',
            'Fundação',
            'O Chamado de Cthulhu',
          ]);
    });
});