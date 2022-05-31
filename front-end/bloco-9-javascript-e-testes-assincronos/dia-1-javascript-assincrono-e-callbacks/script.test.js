const { uppercase } = require('./script');

describe('Teste uppercase', () => {
    it('Retorna palavra com letras maiúsculas', (done) => {
        try {
            const actual = uppercase('Trybe', console.log);
            expect(actual).toBe('TRYBE');
        } catch (error) {
            done(error)
        }
    });
});