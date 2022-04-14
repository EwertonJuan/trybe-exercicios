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