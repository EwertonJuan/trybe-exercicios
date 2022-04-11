let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// exercício 1
console.log('Exercíco 1');

console.log('Bem-vinda, ' + info.personagem);

console.log('---------------------');

// exercício 2
console.log('Exercíco 2');

info.recorrente = 'Sim'
console.log(info);

console.log('---------------------');

// exercício 3
console.log('Exercíco 3');

for(let key in info) {
    console.log(key);
}

console.log('---------------------');

// exercício 4
console.log('Exercíco 4');

for(let key in info) {
    console.log(info[key]);
}

console.log('---------------------');

// exercício 5
console.log('Exercíco 5');

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for(let key in info) {
    if (key !== 'recorrente') {
        console.log(info[key] + ' e ' + info2[key]);
    };
};

if (info.recorrente === info2.recorrente) {
    console.log('Ambos recorrentes')
} else {
    console.log('Não são ambos recorrentes');
};

console.log('---------------------');

// exercício 6
console.log('Exercíco 6');

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

console.log('---------------------');

// exercício 7
console.log('Exercíco 7');

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
})

console.log(leitor.livrosFavoritos);

console.log('---------------------');

// exercício 8
console.log('Exercíco 8');

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

console.log('---------------------');