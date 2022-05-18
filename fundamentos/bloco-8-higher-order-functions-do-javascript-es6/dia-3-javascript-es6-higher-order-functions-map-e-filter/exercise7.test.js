const { authorWith3DotsOnName } = require('./exercise7');

describe ('Test exercise 7', () => {
    it ('Testing authorWith3DotsOnName', () => {
        expect(authorWith3DotsOnName).toBe('O Senhor dos Anéis');
    });
});