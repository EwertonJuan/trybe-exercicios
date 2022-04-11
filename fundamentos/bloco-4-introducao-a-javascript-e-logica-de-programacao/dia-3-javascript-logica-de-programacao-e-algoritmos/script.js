// exercício 2
console.log('Exercício 2');

let word = 'tryber';
let invertedWord = '';

for(let index = word.length - 1; index >= 0 ; index -= 1) {
    invertedWord += word[index];
}
console.log(invertedWord);

// exercício 3
console.log('Exercício 3');

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = '';

for(let index2 = 0; index2 < array.length; index2 += 1) {
    if (biggerWord.length < array[index2].length) {
        biggerWord = array[index2];
    }
}
console.log(biggerWord);

// exercício 4
console.log('Exercício 4');

let numeros = [];
let numerosPrimos = [1, 2];
let maiorPrimo = 0;

for(let index3 = 1; index3 <= 5; index3 += 1) {
    for(let index4 = 1; index4 <= numerosPrimos.length; index4 += 1) {
        if (index3 % numerosPrimos[index4 - 1] === 0) {

        } else {
            numerosPrimos.push(index3);
        }
    }
}

for(let index5 = 0; index5 < numerosPrimos.length; index5 += 1) {
    if (maiorPrimo < numerosPrimos[index5]) {
        maiorPrimo = numerosPrimos[index5];
    }
}

console.log(maiorPrimo);