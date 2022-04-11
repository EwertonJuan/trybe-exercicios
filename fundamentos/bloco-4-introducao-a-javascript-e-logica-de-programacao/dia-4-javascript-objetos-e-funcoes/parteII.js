// exercício 1
console.log('Exercício 1');

function verificaPalindrome(string) {
    let gnirts = ''
    for(let index = string.length; index > 0; index -= 1) {
        gnirts += string[index - 1];
    }
    if (string === gnirts) {
        return true
    } else {
        return false
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

console.log('---------------------');