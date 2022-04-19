function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let days = document.getElementById("days");
function createDays() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.innerText = dezDaysList[i];
    day.className = 'day'
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      day.className += ' holiday';
    }
    days.appendChild(day);
  }
}

createDays();

// Exercício 2

let btnParent = document.getElementsByClassName('buttons-container');

function createBtnHolidays (feriados) {
  let button = document.createElement('button');
  button.id = 'btn-holiday'
  button.innerText = feriados
  btnParent[0].appendChild(button)
}

createBtnHolidays('Feriados');

// Exercício 3

let btnHoliday = document.getElementById('btn-holiday');
let clicks = 0
btnHoliday.addEventListener('click', function (event){  
  if (event.type === 'click') {
    clicks += 1
  }
  let holidays = document.getElementsByClassName('holiday');
  if (clicks === 1 || clicks % 2 !== 0) {
    for (let i = 0; i < holidays.length; i += 1) {
      holidays[i].style.backgroundColor = 'green'
      holidays[i].style.color = 'white'
    }
  }
  if (clicks % 2 === 0) {
    for (let i = 0; i < holidays.length; i += 1) {
      holidays[i].style.backgroundColor = 'rgb(238,238,238)'
      holidays[i].style.color = '#777777'
    }
  }
})

// Exercício 4

function createFridayBtn (friday) {
  let button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = friday;
  btnParent[0].appendChild(button);
}

createFridayBtn('Sexta-feira');

// Exercício 5

let btnFriday = document.getElementById('btn-friday');
let clicksFriday = 0;
btnFriday.addEventListener('click', function (event){
  let daysList = document.getElementsByClassName("day");
  if (event.type === 'click') {
    clicksFriday += 1
  }
  
  for (let i = 0; i < daysList.length; i += 1) {
    if (i === 5 || i === 12 || i === 19 || i === 26) {
      daysList[i].innerText = 'SEXTOU!'
    }
    if (clicksFriday % 2 === 0 && clicksFriday !== 0) {
      if (i === 5 || i === 12 || i === 19 || i === 26) {
        daysList[i].innerText = i - 1
      }
    }
  }
})

// Exercício 6

days.addEventListener('mouseover', function (event) {
  event.target.style.fontSize = '120%';
})

days.addEventListener('mouseout', function (event) {
  event.target.style.fontSize = '20px';
})

// Exercício 7

let myTasks = document.getElementsByClassName('my-tasks');

function addNewTask (task) {
  let newTask = document.createElement('span');
  newTask.innerText = task;
  myTasks[0].appendChild(newTask);
}

addNewTask('Cozinhar')

// Exercício 8

function addSubtitle (color) {
  let subtitle = document.createElement('div');
  myTasks[0].appendChild(subtitle)
  subtitle.style.backgroundColor = color;
}

addSubtitle('green')

// Exercício 9

let divClicks = 0;
addEventListener('click', function (event) {
  if (event.type === 'click') {
    divClicks += 1;
  }
  event.target.className = 'task selected';
  if (divClicks !== 0 && divClicks % 2 === 0) {
    event.target.className = 'task'
  }
})

// Exercício 10

let taskSelected = document.getElementsByClassName('selected');
console.log(taskSelected.style.backgroundColor);
let dayClicks = 0;
days.addEventListener('click', function (event) {
  if (event.type === 'click') {
    dayClicks += 1;
  }
  event.target.style.backgroundColor = taskSelected.style.backgroundColor;
  if (dayClicks !== 0 && dayClicks % 2 === 0) {
    event.target.style.backgroundColor = 'rgb(119,119,119)';
  }
})