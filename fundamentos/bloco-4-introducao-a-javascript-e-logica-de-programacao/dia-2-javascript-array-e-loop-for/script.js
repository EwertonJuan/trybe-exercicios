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
console.log('O maior valor é ' + maiorValor);

// exercicio 6
console.log('Exercício 6');

let valoresImpares = 0;
for(let index4 = 0; index4 < numbers.length; index4 += 1) {
    if (numbers[index4] % 2 !== 0) {
        valoresImpares += 1
    }
}

if (valoresImpares > 0) {
    console.log('Há ' + valoresImpares + ' valores ímpares');
} else {
    console.log('Nenhum valor ímpar encontrado');
}

// exercicio 7
console.log('Exercício 7');

let menorValor = maiorValor
for(let index5 = 0; index5 < numbers.length; index5 += 1) {
    if (numbers[index5] < menorValor) {
        menorValor = numbers[index5]
    }
}
console.log('O menor valor é ' + menorValor);

// exercicio 8
console.log('Exercício 8');

let numbers2 = [];
for(let index6 = 1; index6 <= 25; index6 += 1) {
    numbers2.push(index6);
}
console.log(numbers2);

// exercicio 9
console.log('Exercício 9');

for(let index7 = 0; index7 < numbers2.length; index7 += 1) {
    console.log(numbers2[index7] / 2);
}