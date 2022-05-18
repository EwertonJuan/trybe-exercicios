const { reduceNames } = require('./exercise2');

describe ('Testing exercise2', () => {
    it ('Tests reduceNames', () => {
        expect(reduceNames).toBe("George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");
    });
});