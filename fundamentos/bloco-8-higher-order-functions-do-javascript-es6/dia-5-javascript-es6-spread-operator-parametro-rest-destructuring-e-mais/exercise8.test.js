const { greet } = require('./exercise8');

describe ('Testing exercise 8', () => {
    it ('tests greet', () => {
        expect(greet('John')).toBe('Hi John');
        expect(greet('John', 'Good morning')).toBe('Good morning John');
        expect(greet('Isabela', 'Oi')).toBe('Oi Isabela');
    })
})