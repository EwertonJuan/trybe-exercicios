const { newEmployees, createId } = require('./script');

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
});
