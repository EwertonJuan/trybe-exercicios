const { newEmployees, createId, drawnNumber, lotteryResult, rightAnswers, checkGrade } = require('./script');

describe ('Test exercises', () => {
    it('Teste exercício 1', () => {
        expect(newEmployees(createId)).toEqual(
            expect.objectContaining({
                id1: { name: 'Pedro Guerra', email: 'pedro_guerra@trybe.com'},
                id2: { name: 'Luiza Drumond', email: 'luiza_drumond@trybe.com'},
                id3: { name: 'Carla Paiva', email: 'carla_paiva@trybe.com'},
              }),
        )
    });

    it('Teste exercício 2', () => {
        const number = drawnNumber()
        expect(drawnNumber()).toBeGreaterThanOrEqual(1);
        expect(drawnNumber()).toBeLessThanOrEqual(5);
        expect(lotteryResult(number, drawnNumber)).toBe('Tente novamente');
    });

    it('Teste exercício 3', () => {
        const answers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
        const student1 = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
        const student2 = ['A', 'N.A', 'C', 'B', 'A', 'A', 'D', 'A', 'N.A', 'C']
        const student3 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
        expect(rightAnswers(answers, student1, checkGrade)).toBe(6);
        expect(rightAnswers(answers, student2, checkGrade)).toBe(6);
        expect(rightAnswers(answers, student3, checkGrade)).toBe(10);
    });
});
