// Exercício 1

const createId = (name) => {
    const emailName = name.replace(/ /g, '_');
    const email = `${emailName.toLowerCase()}@trybe.com`;
    const newEmployee = {
        name,
        email,
    };
    return newEmployee;
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
};

// Exercício 2

const drawnNumber = () => {
    const drawn = Math.floor(Math.random() * 5) + 1;
    return drawn;
}

const lotteryResult = (chosenNumber, drawnNumber) => {
    if (chosenNumber === drawnNumber()) {
        return 'Parabéns, você ganhou!';
    } else {
        return 'Tente novamente';
    }
}

// Exercício 3

const checkGrade = (gabarito, estudante) => {
    let total = 0;
    let grade = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        if (gabarito[i] === estudante[i]) {
            total += 1;
            grade += 1;
        } if (gabarito[i] !== estudante[i] && estudante[i] !== 'N.A') {
            grade -= 0.5;
        }
    }
    console.log(grade);
    return total;
}

const rightAnswers = (gabarito, estudante, callback) => {
    const total = callback(gabarito, estudante);
    return total;
}

// Exports
module.exports = {
    newEmployees,
    createId,
    drawnNumber,
    lotteryResult,
    rightAnswers,
    checkGrade,
};