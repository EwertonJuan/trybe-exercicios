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

// exercício 2
console.log('Exercício 2');

function checkArray(array) {
    let greatestIndex = array[0]
    for(index = 0; index < array.length; index += 1) {
        if (greatestIndex < array[index]) {
            greatestIndex = array[index];
        }
    }
    for(index = 0; index < array.length; index += 1) {
        if (greatestIndex === array[index]) {
            greatestIndex = index;
            break;
        }
    }
    return greatestIndex
}

console.log(checkArray([2, 3, 6, 7, 10, 1]));

console.log('---------------------');

// exercício 3
console.log('Exercício 3');

function checkIndex(array) {
    let smallerIndex = array[0]
    for(index = 0; index < array.length; index += 1) {
        if (smallerIndex > array[index]) {
            smallerIndex = array[index];
        }
    }
    for(index = 0; index < array.length; index += 1) {
        if (smallerIndex === array[index]) {
            smallerIndex = index;
            break;
        }
    }
    return smallerIndex
}

console.log(checkIndex([2, 4, 6, 7, 10, 0, -3]));

console.log('---------------------');

// exercício 4
console.log('Exercício 4');

function checkNames(array) {
    let greatestName = array[0];
    for(index = 0; index < array.length; index += 1) {
        if (greatestName.length < array[index].length) {
            greatestName = array[index]
        }
    };
    return greatestName
}

console.log(checkNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log('---------------------');

// exercício 5
console.log('Exercício 5');

function checkApearences(array, number) {
    let apearences = 0;
    for(index = 0; index < array.length; index += 1) {
        if (number === array[index]) {
            apearences += 1
        }
    }

    return apearences
}

function checkArrayNumbers(array) {
    let apearencesOfEach = [];
    for (let index2 = 0; index2 < array.length; index2 += 1) {
        apearencesOfEach.push(checkApearences(array, array[index2]));
    }
    
    let greatestValue = apearencesOfEach[0];
    for(let index3 = 0; index3 < apearencesOfEach.length; index3 += 1) {
        if (greatestValue < apearencesOfEach[index3]) {
            greatestValue = apearencesOfEach[index3];
        }
    }
    for(let index3 = 0; index3 < apearencesOfEach.length; index3 += 1) {
        if (greatestValue === apearencesOfEach[index3]) {
            greatestValue = index3;
            break;
        }
    }
    
    return array[greatestValue]
};

console.log(checkArrayNumbers([2, 3, 2, 5, 8, 2, 3]));

console.log('---------------------');

// exercício 6
console.log('Exercício 6');

function sum(N) {
    let sum = N
    for(index = 0; index < N; index += 1) {
        sum = sum + index
    }
    return sum
}

console.log(sum(5));

console.log('---------------------');

// exercício 7
console.log('Exercício 7');

function verificaFimPalavra(word, ending) {
    let endOfTheDrow = '';
    for(index = word.length; index > 0; index -= 1) {
        endOfTheDrow += word[index - 1];
        if (endOfTheDrow.length === ending.length) {
            break;
        }
    }
    
    let gnidne = '';
    for(index = ending.length; index > 0; index -= 1) {
        gnidne += ending[index - 1];
    }

    if (endOfTheDrow === gnidne) {
        return true
    } else {
        return false
    }
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));

console.log('---------------------');