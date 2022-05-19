const { filterPeople } = require('./exercise4');

describe ('Testing exercise 4', () => {
    it ('tests filterPeople', () => {
        expect(filterPeople).toStrictEqual(['Nicole', 'Toby']);
    })
})