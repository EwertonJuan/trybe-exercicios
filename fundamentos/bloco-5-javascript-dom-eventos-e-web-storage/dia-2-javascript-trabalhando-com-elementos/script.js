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

// exercício 7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
body[0].appendChild(image);

// exercício 8
function counter () {
    let numbers = []
    for (let i = 1; i < 11; i += 1) {
        switch (i) {
            case 1:
                numbers.push('um')
                break;
            case 2:
                numbers.push('dois')
                break;
            case 3:
                numbers.push('três')
                break;
            case 4:
                numbers.push('quatro')
                break;
            case 5:
                numbers.push('cinco')
                break;
            case 6:
                numbers.push('seis')
                break;
            case 7:
                numbers.push('sete')
                break;
            case 8:
                numbers.push('oito')
                break;
            case 9:
                numbers.push('nove')
                break;
            case 10:
                numbers.push('dez')
                break;        
            default:
                break;
        }
    }
    return numbers;
}

console.log(counter());

// let list = createList();
let unorderedList = document.createElement('ul');
rightSection.appendChild(unorderedList);
// unorderedList.appendChild(list);

let listItens = document.createElement('li');
let numbers = counter();
for (let index = 0; index < numbers.length; index += 1) {
    listItens.innerText = numbers[index];
    console.log(listItens);
}