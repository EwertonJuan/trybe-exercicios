const { yearMonths, yearSeasons } = require('./exercise9');

describe ('Testing exercise 9', () => {
    it ('tests yearMonths', () => {
        expect(yearMonths(yearSeasons)).toStrictEqual(['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']);
    })
})