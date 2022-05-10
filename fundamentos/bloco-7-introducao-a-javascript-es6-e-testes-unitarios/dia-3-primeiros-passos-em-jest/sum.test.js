// Exercício 1
const sum = require('./sum');

describe ('Testes na função sum', () => {
    test ('Somando 4 + 5 se obtem 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    test ('Somando 0 + 0 se obtem 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    test ('Usando string, retorna erro', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
});
