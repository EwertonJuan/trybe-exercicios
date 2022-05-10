// Exercício 1

const factorial = (num) => {
    let result = 1;
    for (num; num > 0; num -= 1) {
        result = result * num;
    }
    return result;
}

console.log(factorial(4));

// Exercício 2

const longestWord = (string) => {
    let longestWord = '';
    let currentWord = '';
    for (let i = 0; i < string.length; i += 1) {
        (string[i] !== ' ') ? currentWord += string[i] : currentWord = ''
        if (currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
    }
    return longestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));