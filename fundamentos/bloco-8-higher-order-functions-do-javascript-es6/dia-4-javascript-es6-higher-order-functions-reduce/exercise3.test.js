const { averageAge } = require('./exercise3');

describe ('Testing exercise3', () => {
    it ('Tests averageAge', () => {
        expect(averageAge()).toBe(43);
    });
});