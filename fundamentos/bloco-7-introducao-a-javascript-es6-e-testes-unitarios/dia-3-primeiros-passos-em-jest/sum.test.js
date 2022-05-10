// Exercício 1
const { sum, myRemove, myFizzBuzz, encode, decode } = require('./sum');

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

// Exercício 3

describe ('Testes na função myFizzBuzz', () => {
    test ('15 retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    test ('9 retorna fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    test ('10 retorna buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    test ('7 retorna fizzbuzz', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    test ('String retorna false', () => {
        expect(myFizzBuzz('15')).toBe(false);
    });
});

// Exercício 4

describe ('Testes nas funções encode e decode', () => {
    /* test ('Verifica se encode é uma função', () => {
        expect(encode).toBe(Function encode);
    });

    test ('Verifica se decode é uma função', () => {
        expect(decode).toBe(Function decode);
    }); */

    test ('Verifica se vogais são substituídas', () => {
        expect(encode('Jovem ex-quenga picha frase da Blitz')).toBe('J4v2m 2x-q52ng1 p3ch1 fr1s2 d1 Bl3tz');
    });

    test ('Verifica se números são substituídos', () => {
        expect(decode('J4v2m 2x-q52ng1 p3ch1 fr1s2 d1 Bl3tz')).toBe('Jovem ex-quenga picha frase da Blitz');
    });

    test ('Verifica quantidade de caracteres', () => {
        expect(encode('Jovem ex-quenga picha frase da Blitz').length).toBe(36)
    });
});