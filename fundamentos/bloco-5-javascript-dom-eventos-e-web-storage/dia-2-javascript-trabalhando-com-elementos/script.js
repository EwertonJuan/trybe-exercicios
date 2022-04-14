// exercício 1
let body = document.getElementsByTagName('body');
let header = document.createElement('h1');
header.innerText = 'Exercício 5.2 - JavaScript DOM';
body[0].appendChild(header);

// exercício 2
let main = document.createElement('main');
main.className = 'main-content';
body[0].appendChild(main);

// exercício 3
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// exercício 4
let paragraph = document.createElement('p');
paragraph.innerText = 'Criando elementos com JavaScript, oh yeah!'
section.appendChild(paragraph);

// exercício 5
let leftSection = document.createElement('section');
section.className = 'left-content';
main.appendChild(leftSection);

// exercício 6
let rightSection = document.createElement('section');
rightSection.className = 'right-content'
main.appendChild(rightSection);
