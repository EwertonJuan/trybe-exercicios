const a = 5;
const b = 2;

let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

const c = 8
const d = 4
const e = 10

if (c > d && c > e) {
    console.log(c)
} else if (d > c && d > e) {
    console.log(d)
} else {
    console.log(e)
}

const f = 0;

if (f > 0) {
    console.log('Positive');
} else if (f < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

const a0 = 60;
const b0 = 60;
const c0 = 60;

if (a0 + b0 + c0 === 180) {
    console.log(true);
} else if (a0 < 0 || b0 < 0 || c0 < 0) {
    console.log('ÂNGULO INVÁLIDO')
} else {
    console.log(false);
}

let pecaDeXadrez = 'rei'

switch (pecaDeXadrez) {
    case 'peão':
        console.log('Uma casa para a frente');
        break;
    case 'torre':
        console.log('Para a frente e para os lados');
        break;
    case 'cavalo':
        console.log('Em L');
        break;
    case 'bispo':
        console.log('Para as diagonais');
        break;
    case 'rainha':
        console.log('Para qualquer direção');
        break;
    case 'rei':
        console.log('Uma casa em qualquer direção');
        break;
    default:
        console.log('Não é peça de xadrez');
        break;
}

const porcentagem = 69;

if (porcentagem >= 90) {
    console.log('A')
} else if (porcentagem >= 80) {
    console.log('B')
} else if (porcentagem >= 70) {
    console.log('C')
} else if (porcentagem >= 60) {
    console.log('D')
} else if (porcentagem >= 50) {
    console.log('E')
} else if (porcentagem < 50) {
    console.log('F')
} else {
    console.log('ERRO')
}

const g = 5
const h = 17
const i = 8

if (g % 2 !== 0 && h % 2 !== 0 && i % 2 !== 0) {
    console.log(false)
} else {
    console.log(true)
}

const custo = 10;
const venda = 50;

let lucro = venda - custo * 1.2
if (custo > 0 && venda > 0) {
    console.log(lucro)
} else {
    console.log('Valores inválidos')
}

const salarioBruto = 3100;
let aliquotaInss;
let aliquotaIr;
let salarioLiquido;

if (salarioBruto < 1556.94) {
    aliquotaInss = 0.92
} else if (salarioBruto < 2594.92) {
    aliquotaInss = 0.91
} else if (salarioBruto < 5189.82) {
    aliquotaInss = 0.89
} else {
    aliquotaInss = 570.88
}

if (aliquotaInss < 1) {
    salarioLiquido = salarioBruto * aliquotaInss
} else {
    salarioLiquido = salarioBruto - aliquotaInss
}

if (salarioLiquido < 1903.98) {
    aliquotaIr = 1
} else if (salarioLiquido < 2826.65) {
    aliquotaIr = 0.075
} else if (salarioLiquido < 3751.05) {
    aliquotaIr = 0.15
} else if (salarioLiquido < 4664.68) {
    aliquotaIr = 0.225
} else {
    aliquotaIr = 0.275
}

switch (aliquotaIr) {
    case 0.075:
        salarioLiquido = salarioLiquido - [(salarioLiquido * aliquotaIr) - 142.8];
        break;
    case 0.15:
        salarioLiquido = salarioLiquido - [(salarioLiquido * aliquotaIr) - 354.8];
        break;
    case 0.225:
        salarioLiquido = salarioLiquido - [(salarioLiquido * aliquotaIr) - 636.13];
        break;
    case 0.275:
        salarioLiquido = salarioLiquido - [(salarioLiquido * aliquotaIr) - 869.36];
        break;
    default:
        salarioLiquido = salarioLiquido
        break;    
}

console.log('Seu salário líquido é R$' + salarioLiquido)