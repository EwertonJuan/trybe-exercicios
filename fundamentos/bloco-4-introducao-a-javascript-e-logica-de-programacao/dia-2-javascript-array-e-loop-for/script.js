let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1
console.log('Exercício 1');

for(let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);  
}

// exercicio 2
console.log('Exercício 2');

let resultadoSoma = 0
for(let index2 = 0; index2 < numbers.length; index2 += 1) {
    resultadoSoma = resultadoSoma + numbers[index2]
}
console.log(resultadoSoma);

// exercicio 3
console.log('Exercício 3');

let mediaAritmetica = resultadoSoma / numbers.length
console.log(mediaAritmetica);

// exercicio 4
console.log('Exercício 4');

if (mediaAritmetica > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// exercicio 5
console.log('Exercício 5');

let maiorValor = 0
for(let index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] > maiorValor) {
        maiorValor = numbers[index3];
    }
}
console.log(maiorValor);