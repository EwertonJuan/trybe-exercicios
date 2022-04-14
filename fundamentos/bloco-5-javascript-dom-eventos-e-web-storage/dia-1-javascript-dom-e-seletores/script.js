// document.getElementsByClassName('center-content')[0].innerHTML = 'Em dois anos me vejo trabalhando e em uma faculdade.';

document.getElementsByTagName('main')[0].style.backgroundColor = 'rgb(76,164,109)'

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white'

document.getElementsByTagName('h1')[0].innerText  = 'Exercício 5.1 - JavaScript'

function upperCase () {
    let paragraph = document.getElementsByTagName("p")[0].innerText;
    for (let index = 0; index < paragraph.length; index += 1) {
        paragraph.innerText = paragraph[index].toUpperCase();
    }
    return paragraph
}
console.log(upperCase())