// Exercício 1
const { sum, myRemove } = require('./sum');

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

// Exercício 2

describe ('Testes na função myRemove', () => {
    test ('Remove número 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });

    test ('Não retorna o 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
    });

    test ('Não retorna o 5', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});