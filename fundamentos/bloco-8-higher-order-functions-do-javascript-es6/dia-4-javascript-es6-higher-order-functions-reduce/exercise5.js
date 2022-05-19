const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((acc, name, index) => {
   console.log(names[name]);
    /*  names[index].forEach((letter) => {
        if (letter === 'A' || letter === 'a') {
            return acc += 1;
        }
    }) */
}, 0);
console.log(containsA);
module.exports = { containsA }